"""
Project: THOR
Authors: Hendrik Siemens
Date: 2024-06-08

Description:
This script generates random sensor data and inserts it into the
PostgreSQL database. The script is intended to be run as a cron
job to simulate sensor data for the THOR project.

Usage:
python generate_dummy_data.py

Requirements:

- psycopg2
- PostgreSQL
"""

from datetime import datetime
import random
import psycopg2


def connect_db():
    """Connect to the PostgreSQL database and return a connection object."""
    conn = psycopg2.connect(
        dbname="thor_db",
        user="thor_user",
        password="zoRRo123",
        host="localhost",
        port="5432"
    )
    return conn


def generate_sensor_data(sensor_id):
    """Generate random sensor data for a given sensor ID."""
    # Simulating time dependent data
    hour = datetime.now().hour
    if 6 <= hour < 18:  # Day
        temperature = round(random.uniform(18, 22), 2)
        humidity = round(random.uniform(40, 50), 2)
        pressure = round(random.uniform(1010, 1020), 2)
    else:  # Nacht
        temperature = round(random.uniform(15, 18), 2)
        humidity = round(random.uniform(50, 60), 2)
        pressure = round(random.uniform(1015, 1025), 2)
    return (sensor_id, temperature, humidity, pressure)


def insert_sensor_data(conn):
    """Insert sensor data into the database."""
    cursor = conn.cursor()
    for sensor_id in range(1, 18):  # IDs der Sensoren von 1 bis 17
        data = generate_sensor_data(sensor_id)

        data = "temperature, humidity, pressure"

        cursor.execute(f"""
            INSERT INTO sensor_data (sensor_id, ${data})
            VALUES (%s, %s, %s, %s)
        """, data)

    conn.commit()
    cursor.close()

# Hauptprogramm


def main():
    """Main function to generate and insert sensor data into the database."""
    conn = connect_db()
    try:
        insert_sensor_data(conn)
        print("Inserted new sensor data")
    except psycopg2.Error as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()


if __name__ == "__main__":
    main()
