"""
Filename: blueprints/auth.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module defines the authentication blueprint for the THOR application.
    It includes routes for user login and saving user settings.

Classes:
    - No classes defined in this module.

Functions:
    - login(): Route for user login.
    - save_settings(): Route for saving user settings.

Usage Example:
    The authentication blueprint provides routes for user login and saving user settings.
    It includes routes to authenticate users and update their profile settings.
    
Notes:
    - Blueprints are used to divide a Flask application into smaller, reusable components.
    - They allow you to organize your application into separate modules and routes.
    - Blueprints can be registered with the main application to define different parts of the application.

References:
    - https://flask.palletsprojects.com/en/2.0.x/blueprints/
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/views/
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/views/#blueprints-for-organization
"""
from flask import (
    Blueprint, jsonify,
    current_app, request
)
from flask_jwt_extended import (
    create_access_token, get_jwt_identity, set_access_cookies
)
from flask_jwt_extended import verify_jwt_in_request

from sqlalchemy.exc import SQLAlchemyError
from flask_jwt_extended.exceptions import NoAuthorizationError, JWTExtendedException

from app.models import User
# from app import db

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login', methods=['OPTIONS', 'POST'], strict_slashes=False)
def login_options():
    if request.method == 'OPTIONS':
        response = jsonify({})
        response.headers.add("Access-Control-Allow-Origin",
                             "https://thor.thor-systems.de")
        response.headers.add("Access-Control-Allow-Credentials", "true")
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response

    print("Login Request")

    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = request.json.get('email') if request.json else None
    password = request.json.get('password') if request.json else None

    if not email or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=email)
        response = jsonify({"login": True})

        set_access_cookies(response, access_token)

        return response, 200
    else:
        return jsonify({"msg": "Wrong username or password"}), 401


@auth_bp.route('/is_authenticated', methods=['POST'])
def is_authenticated():
    """
    Checks if the request contains a valid
    JWT token.

    Returns:
    - userid, 200 if the token is valid
    - None, 401 if the token is invalid
    """

    try:
        verify_jwt_in_request()
        current_user = get_jwt_identity()
        user = User.query.filter_by(username=current_user).first()
        if user:
            userid = user.user_id
            return jsonify({'userId': userid, 'isLoggedIn': True}), 200
        else:
            return jsonify({'userId': None, 'isLoggedIn': False}), 401
    except (NoAuthorizationError, JWTExtendedException) as e:
        print(f"JWT Error: {e}")
        return jsonify({'userId': None, 'isLoggedIn': False}), 401
    except SQLAlchemyError as e:
        print(f"Database Error: {e}")
        return jsonify({'userId': None, 'isLoggedIn': False}), 401
    except Exception as e:
        print(f"Unexpected Error: {e}")
        return jsonify({'userId': None, 'isLoggedIn': False}), 401


@auth_bp.route('/logout', methods=['POST'])
def logout():
    verify_jwt_in_request()

    # remove the JWT cookie
    response = jsonify({"msg": "logged_out"})
    response.set_cookie(
        'access_token_cookie',
        value='',
        expires=0,
        httponly=True
    )
    return response, 200
