"""
Filename: blueprints/main.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module defines the main blueprint for the THOR application.
    It includes the index route for the main application page.

Classes:
    - No classes defined in this module.

Functions:
    - index(): Index route for the main blueprint.

Usage Example:
    - The main blueprint provides the index route for the main application page.
    - It can be used to display the main page of the application to users.
    
Notes:
    - Blueprints are used to divide a Flask application into smaller, reusable components.
    - They allow you to organize your application into separate modules and routes.
    - Blueprints can be registered with the main application to define different parts
      of the application.

References:
    - https://flask.palletsprojects.com/en/2.0.x/blueprints/
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/views/
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/views/#blueprints-for-organization
"""

from flask import Blueprint, jsonify

main_bp = Blueprint('main', __name__)


@main_bp.route('/')
def serve_index():
    """Index route for the main blueprint."""
    return jsonify({'message': 'Welcome to THOR!'})
