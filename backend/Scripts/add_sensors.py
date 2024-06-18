import os
import math
from geopy.distance import distance
from geopy.point import Point
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship, backref, declarative_base

# Datenbankkonfiguration
DATABASE_URL = os.environ.get(
    'DATABASE_URL') or 'postgresql://thor_user:zoRRo123@localhost/thor_db'

# SQLAlchemy-Setup
Base = declarative_base()
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# Sensor-Modell


class Sensor(Base):
    """Sensor model for the application."""
    __tablename__ = 'sensors'
    sensor_id = Column(Integer, primary_key=True)
    serial_number = Column(String(100), nullable=False)
    sensor_name = Column(String(100), nullable=False)
    latitude = Column(Float)
    longitude = Column(Float)
    owner_id = Column(Integer, ForeignKey('users.user_id'))

    owner = relationship('User', backref=backref('sensors', lazy=True))

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

        session.add(sensor)
        session.commit()

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

# User-Modell (dummy)


class User(Base):
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True)
    user_name = Column(String(100), nullable=False)


# Erstellen der Tabellen
Base.metadata.create_all(engine)

# Ausgangskoordinaten
center_lat = 51.73907450226525
center_lon = 8.250903251575782
radius = 1500  # in Metern

# Winkel zwischen den Eckpunkten eines Achtecks
angle = 360 / 8

# Funktion zur Berechnung der neuen Koordinate basierend auf einem Winkel und einer Entfernung


def calculate_new_coordinate(center_point, angle_degrees, distance_m):
    destination = distance(meters=distance_m).destination(
        center_point, angle_degrees)
    return destination.latitude, destination.longitude


# Ausgangspunkt
center_point = Point(center_lat, center_lon)

# Berechnung der Eckpunkte des Achtecks
vertices = []
for i in range(8):
    angle_degrees = i * angle
    vertex = calculate_new_coordinate(center_point, angle_degrees, radius)
    vertices.append(vertex)

# Berechnung der weiteren 8 Eckpunkte des zweiten Achtecks
for i in range(8):
    angle_degrees = i * angle
    # doppelter Radius für das zweite Achteck
    vertex = calculate_new_coordinate(center_point, angle_degrees, radius * 2)
    vertices.append(vertex)

# Hinzufügen der Sensoren zur Datenbank
for idx, vertex in enumerate(vertices, start=2):  # Beginnend mit ID 2
    lat, lon = vertex
    new_sensor = Sensor(
        sensor_id=idx,
        serial_number=f'SN{1000+idx}',
        sensor_name=f'Sensor {idx}',
        latitude=lat,
        longitude=lon,
        owner_id=1  # Dummy owner_id, du kannst es nach Bedarf anpassen
    )
    session.add(new_sensor)

session.commit()
print("Sensoren erfolgreich hinzugefügt")
