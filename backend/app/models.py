"""
Filename: models.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides the database models for the THOR application.
    The different classes here represent the tables in the database and their relationships.
    They are used to store data for users, roles, sensors, sensor data, localization data,
    and lightning detections.

Classes:
    - Role (db.Model)
    - User (db.Model)
    - UserRole (db.Model)
    - ApiKey (db.Model)
    - Sensor (db.Model)
    - LocalizationData (db.Model)
    - SensorData (db.Model) 
    - LightningDetection (db.Model)

Functions:
    - Role:
        - __init__(self, role_name)
    - User:
        - __init__(self, username, email, password, profile_picture)
    - UserRole:
        - __init__(self, user_id, role_id)
    - ApiKey:
        - __init__(self, api_key, user_id)
    - Sensor:
        - __init__(self, sensor_id, serial_number, sensor_name, latitude, longitude, owner_id)
        - set_sensor(self, sensor_id, serial_number, sensor_name, latitude, longitude, owner_id)
        - to_dict(self)
    - LocalizationData:
        - __init__(self, latitude, longitude, address, sensor_id)
    - SensorData:
        - __init__(self, timestamp, temperature, humidity, pressure, sensor_id)
    - LightningDetection:
        - __init__(self, timestamp, sensor_id, intensity, sensor_type)

Usage Example:
    This module is used to define the database models for the THOR application.
    The models are used to store data in the database and represent the tables and relationships
    between them. The can be imported into other modules to interact with the database.
    
Notes:
    - The models are defined using SQLAlchemy, a popular ORM for Python.
    - Each model represents a table in the database and its columns.
    - Relationships between models are defined using foreign keys and backrefs.

References:
    - https://www.sqlalchemy.org/
    - https://docs.sqlalchemy.org/en/14/orm/tutorial.html
"""

from . import db


class Role(db.Model):
    """Role model for the application."""
    __tablename__ = 'roles'
    role_id = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(50), nullable=False)

    def __init__(self, role_name):
        """Initializes the Role model."""
        self.role_name = role_name


class User(db.Model):
    """User model for the application."""
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    profile_picture = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    def __init__(self, username, email, password, profile_picture):
        """Initializes the User model."""
        self.username = username
        self.email = email
        self.password = password
        self.profile_picture = profile_picture

    def set_password(self, password):
        """Sets the password for the user."""
        self.password = password

    def check_password(self, password):
        """Checks if the password is correct."""
        return self.password == password

    def to_dict(self):
        """Converts the User model to a dictionary."""
        return {
            'user_id': self.user_id,
            'username': self.username,
            'email': self.email,
            'profile_picture': self.profile_picture,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }


class UserRole(db.Model):
    """UserRole model for the application."""
    __tablename__ = 'userroles'
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.user_id'), primary_key=True)
    role_id = db.Column(db.Integer, db.ForeignKey(
        'roles.role_id'), primary_key=True)

    def __init__(self, user_id, role_id):
        """Initializes the UserRole model."""
        self.user_id = user_id
        self.role_id = role_id

    def set_role(self, user_id, role_id):
        """Sets a role for a user in the database."""
        user_role = UserRole(user_id=user_id, role_id=role_id)
        db.session.add(user_role)
        db.session.commit()
        return user_role

    def to_dict(self):
        """Converts the UserRole model to a dictionary."""
        return {
            'user_id': self.user_id,
            'role_id': self.role_id
        }


class ApiKey(db.Model):
    """ApiKey model for the application."""
    __tablename__ = 'apikeys'
    api_key_id = db.Column(db.Integer, primary_key=True)
    api_key = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.user_id'), nullable=False)

    user = db.relationship('User', backref=db.backref('apikeys', lazy=True))

    def __init__(self, api_key, user_id):
        """Initializes the ApiKey model."""
        self.api_key = api_key
        self.user_id = user_id


class Sensor(db.Model):
    """Sensor model for the application."""
    __tablename__ = 'sensors'
    sensor_id = db.Column(db.Integer, primary_key=True)
    serial_number = db.Column(db.String(100), nullable=False)
    sensor_name = db.Column(db.String(100), nullable=False)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))

    owner = db.relationship('User', backref=db.backref('sensors', lazy=True))

    def __init__(self, sensor_id, serial_number, sensor_name, latitude, longitude, owner_id):
        """Initializes the Sensor model."""
        self.sensor_id = sensor_id
        self.serial_number = serial_number
        self.sensor_name = sensor_name
        self.latitude = latitude
        self.longitude = longitude
        self.owner_id = owner_id

    def set_sensor(self, sensor_id, serial_number, sensor_name, latitude, longitude, owner_id):
        """Sets a sensor in the database."""

        sensor = Sensor(
            sensor_id=sensor_id,
            serial_number=serial_number,
            sensor_name=sensor_name,
            latitude=latitude,
            longitude=longitude,
            owner_id=owner_id
        )

        db.session.add(sensor)
        db.session.commit()

        return sensor

    def to_dict(self):
        """Converts the Sensor model to a dictionary."""
        return {
            'sensor_id': self.sensor_id,
            'serial_number': self.serial_number,
            'sensor_name': self.sensor_name,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'owner_id': self.owner_id
        }

    def save(self):
        """Saves the sensor to the database."""
        db.session.add(self)
        self.finish_action()

    def delete(self):
        """Deletes the sensor from the database."""
        db.session.delete(self)
        self.finish_action()

    def finish_action(self):
        """Finish the action."""
        db.session.commit()


class LocalizationData(db.Model):
    """LocalizationData model for the application."""
    __tablename__ = 'localizationdata'
    location_id = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    address = db.Column(db.String(255))
    sensor_id = db.Column(db.Integer, db.ForeignKey('sensors.sensor_id'))

    sensor = db.relationship(
        'Sensor', backref=db.backref('localizationdata', lazy=True))

    def __init__(self, latitude, longitude, address, sensor_id):
        """Initializes the LocalizationData model."""
        self.latitude = latitude
        self.longitude = longitude
        self.address = address
        self.sensor_id = sensor_id


class SensorData(db.Model):
    """SensorData model for the application."""
    __tablename__ = 'sensordata'
    data_id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)
    pressure = db.Column(db.Float)
    sensor_id = db.Column(db.Integer, db.ForeignKey('sensors.sensor_id'))

    sensor = db.relationship(
        'Sensor', backref=db.backref('sensordata', lazy=True))

    def __init__(self, timestamp, temperature, humidity, pressure, sensor_id):
        """Initializes the SensorData model."""
        self.timestamp = timestamp
        self.temperature = temperature
        self.humidity = humidity
        self.pressure = pressure
        self.sensor_id = sensor_id

    def save(self):
        """Saves the sensor data to the database."""
        db.session.add(self)
        self.finish_action()

    def delete(self):
        """Deletes the sensor data from the database."""
        db.session.delete(self)
        self.finish_action()

    def finish_action(self):
        """Finish the action."""
        db.session.commit()


class LightningDetection(db.Model):
    """LightningDetection model for the application."""
    __tablename__ = 'lightningdetection'
    lightning_id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    sensor_id = db.Column(db.Integer, db.ForeignKey('sensors.sensor_id'))
    intensity = db.Column(db.Float)
    sensor_type = db.Column(db.String(50))

    sensor = db.relationship('Sensor', backref=db.backref(
        'lightningdetections', lazy=True))

    def __init__(self, timestamp, sensor_id, intensity, sensor_type):
        """Initializes the LightningDetection model."""
        self.timestamp = timestamp
        self.sensor_id = sensor_id
        self.intensity = intensity
        self.sensor_type = sensor_type
