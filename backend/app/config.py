"""
Filename: your_module_name.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides the configuration settings for the THOR application.
    It specifies the settings for the Flask application, the database connection,
    the session cookie, and the JWT authentication.
    The settings are used to configure the app instance in the create_app function.

Classes:
    Config: A class that defines the configuration settings for the THOR application.

Functions:
    No functions defined in this module.

Usage Example:
    The Config class is used to configure the Flask application instance in the create_app function.
    The settings are read from environment variables or set to default values if no environment variables are present.
    
Notes:
    - The Config class is used to configure the Flask application instance in the create_app function.
    - The settings are read from environment variables or set to default values if no environment variables are present.
    - The configuration settings are used to set up the app instance with the necessary parameters.

References:
    - https://flask.palletsprojects.com/en/2.0.x/config/
    - https://flask.palletsprojects.com/en/2.0.x/config/#configuring-from-environment-variables
    - https://flask.palletsprojects.com/en/2.0.x/config/#configuration-best-practices
"""

import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL') or 'postgresql://thor_user:zoRRo123@localhost/thor_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SESSION_COOKIE_NAME = 'heal_session'
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or 'very_very_secret_key'
    JWT_ACCESS_TOKEN_EXPIRES = False
    JWT_REFRESH_TOKEN_EXPIRES = False
    JWT_HEADER_TYPE = 'Bearer'
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']
    JWT_TOKEN_LOCATION = ['cookies']
    JWT_COOKIE_SECURE = True
    JWT_COOKIE_CSRF_PROTECT = False
    JWT_CSRF_CHECK_FORM = True
    JWT_CSRF_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE']
    JWT_COOKIE_NAME = 'access_token'
    JWT_ACCESS_TOKEN_PATH = '/'
    JWT_REFRESH_TOKEN_PATH = '/refresh'
    JWT_COOKIE_SAMESITE = 'None'  # if CORS, 'Lax' otherwise
    JWT_COOKIE_HTTPONLY = True
    IMAGE_UPDATE_INTERVAL = 30
    IMAGE_URLS = os.getenv('IMAGE_URLS', "").split(',')
    SAVE_PATHS = os.getenv('SAVE_PATHS', "").split(',')
