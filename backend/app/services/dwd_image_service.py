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
