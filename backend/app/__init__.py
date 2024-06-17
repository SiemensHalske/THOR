from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from app.services.dwd_image_service import init_image_service

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
    app = Flask(__name__)

    # Konfiguration laden
    app.config.from_object('app.config.Config')

    # Erweiterungen initialisieren
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    cors.init_app(app)
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

    @app.after_request
    def add_cors_headers(response):
        allow_origin = '*'
        allow_methods = 'GET, POST, PUT, DELETE, OPTIONS'
        allow_headers = 'Content-Type, Authorization'

        response.headers['Access-Control-Allow-Origin'] = allow_origin
        response.headers['Access-Control-Allow-Methods'] = allow_methods
        response.headers['Access-Control-Allow-Headers'] = allow_headers
        return response

    return app
