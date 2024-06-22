"""
Filename: your_module_name.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides a service to fetch weather data from
    the Open-Meteo API and store it in the database.

Classes:
    - None

Functions:
    - fetch_weather_data(latitude, longitude)
    - fetch_and_store_sensor_data(sensor)
    - scheduled_sensor_data_update(app)
    - init_sensor_data_service(app)

Usage Example:
    This module is used to fetch weather data from the Open-Meteo API and store it in the database,
    as a service for the THOR API-Server. It is intended to be run as a background service and not
    directly by the user.
    
Notes:
    - The service uses the Open-Meteo API to fetch weather data for a given latitude and longitude.
    - The data is then stored in the database for each sensor.
    - The service is scheduled to run every 15 minutes to update the sensor data.

References:
    - https://open-meteo.com/
    - https://www.ibm.com/de-de/topics/rest-apis
"""

import requests_cache
from apscheduler.schedulers.background import BackgroundScheduler
from app.models import Sensor, SensorData
from app import db
import openmeteo_requests
from retry_requests import retry
import pandas as pd

# Setup the Open-Meteo API client with cache and retry on error
cache_session = requests_cache.CachedSession('.cache', expire_after=3600)
retry_session = retry(cache_session, retries=5, backoff_factor=0.2)
openmeteo = openmeteo_requests.Client(session=retry_session)


def fetch_weather_data(latitude, longitude):
    """Fetches weather data from Open-Meteo API for the given latitude and longitude."""
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "hourly": ["temperature_2m", "relative_humidity_2m", "surface_pressure"]
    }
    responses = openmeteo.weather_api(url, params=params)
    if not responses or len(responses) == 0:
        return None

    response = responses[0]
    hourly = response.Hourly()

    if hourly is None:
        return None

    temperature_var = hourly.Variables(0)
    humidity_var = hourly.Variables(1)
    pressure_var = hourly.Variables(2)

    if temperature_var is None or humidity_var is None or pressure_var is None:
        return None

    hourly_temperature_2m = temperature_var.ValuesAsNumpy()
    hourly_relative_humidity_2m = humidity_var.ValuesAsNumpy()
    hourly_surface_pressure = pressure_var.ValuesAsNumpy()

    time = hourly.Time()
    time_end = hourly.TimeEnd()
    interval = hourly.Interval()

    if time is None or time_end is None or interval is None:
        return None

    hourly_data = {
        "date": pd.date_range(
            start=pd.to_datetime(time, unit="s", utc=True),
            end=pd.to_datetime(time_end, unit="s", utc=True),
            freq=pd.Timedelta(seconds=interval),
            inclusive="left"
        ),
        "temperature_2m": hourly_temperature_2m,
        "relative_humidity_2m": hourly_relative_humidity_2m,
        "surface_pressure": hourly_surface_pressure
    }

    return pd.DataFrame(data=hourly_data)


def fetch_and_store_sensor_data(sensor):
    """Fetches weather data for a given sensor and stores it in the database."""
    df = fetch_weather_data(sensor.latitude, sensor.longitude)
    if df is None or df.empty:
        print(f"No data retrieved for sensor {sensor.sensor_name}")
        return

    for _, row in df.iterrows():
        sensor_data = SensorData(
            timestamp=row['date'],
            temperature=row['temperature_2m'],
            humidity=row['relative_humidity_2m'],
            pressure=row['surface_pressure'],
            sensor_id=sensor.sensor_id
        )
        db.session.add(sensor_data)
    db.session.commit()
    print(f"Data for sensor {sensor.sensor_name} saved to database.")


def scheduled_sensor_data_update(app):
    """Scheduled task to update sensor data."""
    with app.app_context():
        sensors = Sensor.query.all()
        for sensor in sensors:
            fetch_and_store_sensor_data(sensor)


def init_sensor_data_service(app):
    """Initializes the sensor data service and starts the scheduler."""
    scheduler = BackgroundScheduler()
    scheduler.add_job(
        scheduled_sensor_data_update,
        'interval',
        minutes=15,
        args=[app]
    )
    scheduler.start()
    print("Sensor data service initialized and scheduler started.")
