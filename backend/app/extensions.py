"""
Filename: app/extensions.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides the extensions used by the THOR application.
    It initializes and configures the Flask extensions used by the application, such as SQLAlchemy, Bcrypt, and JWT.
    The extensions are then used throughout the application to interact with the database, handle authentication, and manage tokens.

Classes:
    - No classes defined in this module.

Functions:
    - No functions defined in this module.

Usage Example:
    - This module initializes and configures the Flask extensions used by the THOR application.
    - It provides a central place to manage the extensions and their configuration.
    
Notes:
    - Extensions are used to add additional functionality to a Flask application.
    - They are typically initialized and configured in a separate module to keep the application code clean and modular.
    - The extensions are then used throughout the application to interact with external services or perform specific tasks.

References:
    - https://flask.palletsprojects.com/en/2.0.x/extensions/
    - https://flask.palletsprojects.com/en/2.0.x/patterns/pluggable/
    - https://flask.palletsprojects.com/en/2.0.x/patterns/extensions/
"""


class RequestCode:
    """Request codes for HTTP responses"""
    NOT_FOUND = 404
    BAD_REQUEST = 400
    METHOD_NOT_ALLOWED = 405
    REQUEST_SUCCESS = 200
    CREATED = 201
    UNAUTHORIZED = 401
    FORBIDDEN = 403
    CONFLICT = 409
    INTERNAL_SERVER_ERROR = 500
    SERVICE_UNAVAILABLE = 503
    GATEWAY_TIMEOUT = 504


class RequestAnswer:
    """Request answers for HTTP responses"""
    MISS_SENS_ID = "Sensor id is required"
    SENS_NOT_FOUND = "Sensor not found"
    SENS_EXISTS = "Sensor already exists"
    SENS_DELETED = "Sensor deleted"
    NO_DATA = "No data available"
    DATA_ADDED = "Data added"
    DATA_DELETED = "Data deleted"
    MISSING_DATA_ID = "data_id is required"
    URL_MATCH = "sensor_id in URL and body must match"
    BODY_EMPTY = "Body cannot be empty"
    MISS_VALUES = "Missing values"
    METHOD_NA = "Method not allowed"
