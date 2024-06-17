import os
from re import I


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
    JWT_TOKEN_LOCATION = ['headers', 'cookies']
    JWT_COOKIE_SECURE = False
    JWT_COOKIE_CSRF_PROTECT = False
    JWT_CSRF_CHECK_FORM = True
    JWT_CSRF_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE']
    IMAGE_UPDATE_INTERVAL = 30
    IMAGE_URLS = os.getenv('IMAGE_URLS', "").split(',')
    SAVE_PATHS = os.getenv('SAVE_PATHS', "").split(',')
