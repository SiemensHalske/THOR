"""# models.py

This module contains the database models for the application.
The models are defined using SQLAlchemy ORM. The models are
used to interact with the database and perform CRUD operations.

CRUD operations are Create, Read, Update, and Delete operations.
These operations are used to interact with the database and perform
operations on the data.

In contrary to the traditional way of writing SQL queries,
SQLAlchemy ORM provides an object-oriented way of interacting
with the database. The models defined in this module are used
to interact with the database.
"""

from . import db


class Role(db.Model):
    """Role model for the application."""
    __tablename__ = 'roles'
    role_id = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(50), nullable=False)


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


class UserRole(db.Model):
    """UserRole model for the application."""
    __tablename__ = 'userroles'
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.user_id'), primary_key=True)
    role_id = db.Column(db.Integer, db.ForeignKey(
        'roles.role_id'), primary_key=True)


class ApiKey(db.Model):
    """ApiKey model for the application."""
    __tablename__ = 'apikeys'
    api_key_id = db.Column(db.Integer, primary_key=True)
    api_key = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.user_id'), nullable=False)

    user = db.relationship('User', backref=db.backref('apikeys', lazy=True))


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
        return {
            'sensor_id': self.sensor_id,
            'serial_number': self.serial_number,
            'sensor_name': self.sensor_name,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'owner_id': self.owner_id
        }


class LocalizationData(db.Model):
    __tablename__ = 'localizationdata'
    location_id = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    address = db.Column(db.String(255))
    sensor_id = db.Column(db.Integer, db.ForeignKey('sensors.sensor_id'))

    sensor = db.relationship(
        'Sensor', backref=db.backref('localizationdata', lazy=True))


class SensorData(db.Model):
    __tablename__ = 'sensordata'
    data_id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)
    pressure = db.Column(db.Float)
    sensor_id = db.Column(db.Integer, db.ForeignKey('sensors.sensor_id'))

    sensor = db.relationship(
        'Sensor', backref=db.backref('sensordata', lazy=True))


class LightningDetection(db.Model):
    __tablename__ = 'lightningdetection'
    lightning_id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    sensor_id = db.Column(db.Integer, db.ForeignKey('sensors.sensor_id'))
    type = db.Column(db.String(50))
    intensity = db.Column(db.Float)
    sensor_type = db.Column(db.String(50))

    sensor = db.relationship('Sensor', backref=db.backref(
        'lightningdetections', lazy=True))
