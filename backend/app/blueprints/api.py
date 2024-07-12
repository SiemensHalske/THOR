"""
Filename: blueprints/api.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module defines the API blueprint for the THOR application.
    The blueprint provides routes for interacting with the sensors
    in the database, such as getting a list of sensors or adding a new sensor.

Classes:
    - No classes defined in this module.

Functions:
    - index(): Index route for the API blueprint.
    - test(): Test route for the API blueprint.
    - sensors(): Handles GET, POST, and DELETE requests to the /sensors route.
    - get_sensor(sensor_id: int): Handles GET requests to the /sensors/<sensor_id> route.
    - get_sensor_data(): Handles GET requests to get all sensor data.
    - sensor_data(sensor_id: int): Handles GET, POST, and DELETE requests to the /sensors/data/<sensor_id> route.

Usage Example:
    The API blueprint provides routes for interacting with the sensors in the database.
    It includes routes to get a list of sensors and add a new sensor to the database as well as
    routes to get sensor data and add new sensor data to the database.

    Example:

    - Get a list of all sensors:
        GET /sensors

    - Add a new sensor:
        POST /sensors

Notes:
    - Blueprints are used to divide a Flask application into smaller, reusable components.
    - They allow you to organize your application into separate modules and routes.
    - Blueprints can be registered with the main application to define different parts of
      the application.

References:
    - https://flask.palletsprojects.com/en/2.0.x/blueprints/
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/views/
    #blueprints-for-organization
    - https://flask.palletsprojects.com/en/2.0.x/tutorial/views/
"""

from functools import wraps
from typing import Union, Tuple
from flask import Blueprint, jsonify, request
from werkzeug.wrappers import Response
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from app.models import Sensor, SensorData, ApiKey
from app.extensions import RequestCode as rc
from app.extensions import RequestAnswer as ra

api_bp = Blueprint('api', __name__)


def get_api_key():
    """
    Get the API key from the Authorization header or the remote address if no
    key is provided.
    """
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith('Bearer '):
        return auth_header.split(" ")[1]
    return get_remote_address()


limiter = Limiter(
    key_func=get_api_key,
    default_limits=["200 per day", "50 per hour"]
)


def require_api_key(f):
    """Decorator to require an API key for access to the API routes"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print(f"Request headers: {request.headers}")
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            print(f"Authorization header: {auth_header}")
            token = auth_header.split(" ")[1]
            api_key_entry = ApiKey.query.filter_by(api_key=token).first()
            if api_key_entry:
                return f(*args, **kwargs)
        return jsonify({"message": "Unauthorized"}), 401
    return decorated_function


@api_bp.route('/sensors', methods=['GET', 'POST', 'DELETE'])
@require_api_key
@limiter.limit("10 per minute")
def sensors() -> Union[Response, Tuple[Response, int]]:
    """
    Handles GET, POST, and DELETE requests to the /sensors route.
    GET: Returns a list of all sensors in the database.
    POST: Adds a new sensor to the database.
    DELETE: Deletes a sensor from the database.
    """

    print(f"Request method: {request.method}")

    if request.method == 'GET':
        sensors_list = [sensor.to_dict() for sensor in Sensor.query.all()]
        return jsonify(sensors_list), rc.REQUEST_SUCCESS

    elif request.method == 'POST':
        if not request.json:
            return jsonify(
                {"error": "Bad Request", "message": ra.BODY_EMPTY}
            ), rc.BAD_REQUEST

        required_fields = ['sensor_id', 'serial_number',
                           'sensor_name', 'latitude', 'longitude', 'owner_id']
        if not all(field in request.json for field in required_fields):
            return jsonify(
                {"error": "Bad Request", "message": ra.MISS_VALUES}
            ), rc.BAD_REQUEST

        if Sensor.query.filter_by(sensor_id=request.json['sensor_id']).first():
            return jsonify(
                {"error": "Bad Request", "message": ra.SENS_EXISTS}
            ), rc.BAD_REQUEST

        sensor = Sensor(
            sensor_id=request.json['sensor_id'],
            serial_number=request.json['serial_number'],
            sensor_name=request.json['sensor_name'],
            latitude=request.json['latitude'],
            longitude=request.json['longitude'],
            owner_id=request.json['owner_id']
        )

        sensor.save()
        return jsonify({"message": "Sensor successfully added"}), rc.CREATED

    elif request.method == 'DELETE':
        if not request.json or 'sensor_id' not in request.json:
            return jsonify({"error": "Bad Request", "message": ra.MISS_SENS_ID}), rc.BAD_REQUEST

        sensor = Sensor.query.filter_by(
            sensor_id=request.json['sensor_id']).first()
        if not sensor:
            return jsonify({"error": "Not Found", "message": ra.SENS_NOT_FOUND}), rc.NOT_FOUND

        sensor.delete()
        return jsonify({"message": ra.SENS_DELETED}), rc.REQUEST_SUCCESS

    return jsonify({"error": ra.METHOD_NA}), rc.METHOD_NOT_ALLOWED


@api_bp.route('/sensors/<int:sensor_id>', methods=['GET'])
@require_api_key
@limiter.limit("10 per minute")
def get_sensor(sensor_id: int) -> Union[Response, Tuple[Response, int]]:
    """
    Handles GET requests to the /sensors/<sensor_id> route.
    Retrieves a specific sensor from the database based on the sensor_id.
    """
    sensor = Sensor.query.filter_by(sensor_id=sensor_id).first()
    if not sensor:
        return jsonify({"error": "Not Found", "message": ra.SENS_NOT_FOUND}), rc.NOT_FOUND
    return jsonify(sensor.to_dict()), rc.REQUEST_SUCCESS


@api_bp.route('/sensors/data', methods=['GET'])
@require_api_key
@limiter.limit("10 per minute")
def get_sensor_data() -> Union[Response, Tuple[Response, int]]:
    """
    Handles GET requests to the /sensors/data route.
    Retrieves sensor data from the database.
    """
    sensor_data_list = [sensor_data.to_dict()
                        for sensor_data in SensorData.query.all()]
    return jsonify(sensor_data_list), rc.REQUEST_SUCCESS


@api_bp.route('/sensors/data/<int:sensor_id>', methods=['GET', 'POST', 'DELETE'])
@require_api_key
@limiter.limit("10 per minute")
def sensor_data(sensor_id: int) -> Union[Response, Tuple[Response, int]]:
    """
    Handles GET, POST, and DELETE requests to the /sensors/data/<sensor_id> route.
    GET: Retrieves sensor data from the database based on the sensor_id.
    POST: Adds new sensor data to the database.
    DELETE: Deletes sensor data from the database based on the sensor_id and data_id.
    """
    if request.method == 'GET':
        sensor_data_list = [sensor_data.to_dict(
        ) for sensor_data in SensorData.query.filter_by(sensor_id=sensor_id).all()]
        if not sensor_data_list:
            return jsonify({"error": "Not Found", "message": ra.NO_DATA}), rc.NOT_FOUND
        return jsonify(sensor_data_list), rc.REQUEST_SUCCESS

    elif request.method == 'POST':
        if not request.json:
            return jsonify({"error": "Bad Request", "message": ra.BODY_EMPTY}), rc.BAD_REQUEST

        required_fields = ['timestamp', 'temperature',
                           'humidity', 'pressure', 'sensor_id']

        if not all(field in request.json for field in required_fields) or sensor_id != request.json.get('sensor_id'):
            return jsonify({"error": "Bad Request", "message": "Missing values or URL does not match"}), rc.BAD_REQUEST

        sensor = Sensor.query.filter_by(
            sensor_id=request.json['sensor_id']).first()

        if not sensor:
            return jsonify({"error": "Not Found", "message": ra.SENS_NOT_FOUND}), rc.NOT_FOUND

        data = SensorData(
            timestamp=request.json['timestamp'],
            temperature=request.json['temperature'],
            humidity=request.json['humidity'],
            pressure=request.json['pressure'],
            sensor_id=request.json['sensor_id']
        )

        data.save()
        return jsonify({"message": ra.DATA_ADDED}), rc.CREATED

    elif request.method == 'DELETE':
        if not request.json or 'data_id' not in request.json:
            return jsonify({"error": "Bad Request", "message": ra.MISSING_DATA_ID}), rc.BAD_REQUEST

        data = SensorData.query.filter_by(
            sensor_id=sensor_id, data_id=request.json['data_id']).first()
        if not data:
            return jsonify({"error": "Not Found", "message": ra.NO_DATA}), rc.NOT_FOUND

        data.delete()
        return jsonify({"message": ra.DATA_DELETED}), rc.REQUEST_SUCCESS

    return jsonify({"error": ra.METHOD_NA}), rc.METHOD_NOT_ALLOWED
