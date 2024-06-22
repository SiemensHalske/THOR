"""
Filename: your_module_name.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides the main entry point for the THOR application.
    It creates the Flask application instance and initializes it with the necessary configuration.
    The app instance is then used to run the application.

Classes:
    - No classes defined in this module.

Functions:
    - create_app():
        - This function creates the Flask application instance and initializes it with the necessary configuration.
        - It registers the blueprints for the different parts of the application (auth, api, frontend).
        - It configures the app with the settings from the config module.
        - It initializes the database with the db module.
        - It returns the app instance.

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

from app import create_app

app = create_app()
