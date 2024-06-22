"""
Filename: service/dwd_image_service.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides a service to fetch images from a given URL and store them locally.
    The service is intended to be run as a background service and not directly by the user.

Classes:
    - No classes defined in this module.

Functions:
    - fetch_and_store_image(image_url, save_path)
    - scheduled_image_update(app)
    - init_image_service(app)

Usage Example:
    This module is used to fetch images from a given URL and store them locally.
    The service is scheduled to run at regular intervals to update the images.
    
Notes:
    - The service fetches images from a given URL and stores them locally on the server.
    - The images are updated at regular intervals to ensure that the latest images are always available.
    - The service is intended to be run as a background service and not directly by the user.

References:
    - https://requests.readthedocs.io/en/master/
    - https://apscheduler.readthedocs.io/en/stable/
    - https://flask.palletsprojects.com/en/2.0.x/
"""

import os
import requests
from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask


def fetch_and_store_image(image_url, save_path):
    response = requests.get(image_url, timeout=5)
    if response.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(response.content)
        print(f"Image saved to {save_path}")
    else:
        print(f"Failed to fetch image from {
              image_url}. Status code: {response.status_code}")


def scheduled_image_update(app):
    with app.app_context():
        image_urls = app.config['IMAGE_URLS'].split(',')
        save_paths = app.config['SAVE_PATHS'].split(',')

        for image_url, save_path in zip(image_urls, save_paths):
            fetch_and_store_image(image_url, save_path)


def init_image_service(app):
    scheduler = BackgroundScheduler()
    scheduler.add_job(scheduled_image_update, 'interval',
                      minutes=app.config['IMAGE_UPDATE_INTERVAL'], args=[app])
    scheduler.start()
    print("Image service initialized and scheduler started.")
