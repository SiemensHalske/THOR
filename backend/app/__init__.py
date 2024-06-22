"""
Filename: your_module_name.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides the main entry point for the THOR application.
    It creates the Flask application instance and initializes it with the necessary configuration.
    The app instance is then used to run the application.

Classes:
    No classes defined in this module.

Functions:
    create_app():
        This function creates the Flask application instance and initializes it with the necessary configuration.
        It registers the blueprints for the different parts of the application (auth, api, frontend).
        It configures the app with the settings from the config module.
        It initializes the database with the db module.
        It returns the app instance.

Usage Example:
    app = create_app()
    app.run()

Notes:
    - This module is the main entry point for the THOR application.
    - It creates and configures the Flask app instance.
    - The app instance is used to run the application and handle incoming requests.

References:
    - https://flask.palletsprojects.com/en/2.0.x/
    - https://flask.palletsprojects.com/en/2.0.x/patterns/appfactories/
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/factory/
"""

from flask import Flask, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from app.services.dwd_image_service import init_image_service
from app.extensions import RequestAnswer as ra, RequestCode as rc

db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
login_manager = LoginManager()
cors = CORS()
jwt = JWTManager()


def create_app():
    """
    Create a Flask application using the app factory pattern.
    """
    app = Flask(__name__, static_folder='static', template_folder='templates')

    # Konfiguration laden
    app.config.from_object('app.config.Config')

    # Erweiterungen initialisieren
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    cors.init_app(app, supports_credentials=True, origins=["https://thor.thor-systems.de"], resources={
        r"/*": {"origins": "https://thor.thor-systems.de"}})

    jwt.init_app(app)

    # Blueprints registrieren
    from app.blueprints.main import main_bp
    from app.blueprints.auth import auth_bp
    from app.blueprints.api import api_bp
    app.register_blueprint(main_bp)
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(api_bp, url_prefix='/api')

    # initialize additional services
    with app.app_context():
        init_image_service(app)

    @ app.after_request
    def add_cors_headers(response):
        allow_origin = '*'
        allow_methods = 'GET, POST, PUT, DELETE, OPTIONS'
        allow_headers = 'Content-Type, Authorization'

        response.headers['Access-Control-Allow-Origin'] = allow_origin
        response.headers['Access-Control-Allow-Methods'] = allow_methods
        response.headers['Access-Control-Allow-Headers'] = allow_headers
        return response

    # OPTIONS-Route hinzufügen
    @ app.route('/auth/login', methods=['OPTIONS'])
    @ app.route('/api/<path:path>', methods=['OPTIONS'])
    def options(path=None):
        response = jsonify({'status': 'ok'})
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response

    # Error handling
    @ app.errorhandler(rc.NOT_FOUND)
    def page_not_found(e):
        return jsonify({'error': 'Page not found'}), rc.NOT_FOUND

    @ app.errorhandler(rc.INTERNAL_SERVER_ERROR)
    def internal_server_error(e):
        return jsonify({'error': f'Internal server error: {e}'}), rc.INTERNAL_SERVER_ERROR

    return app
