"""
API Blueprint
-------------
This blueprint is used to define the API routes for the application.
The API blueprint is registered in the app factory in the app/__init__.py file.

Current Routes:
- /api
    - /
    - /test

The routes are defined as follows:
- /api
    - GET: Returns the string "API Blueprint"
- /api/test
    - GET: Returns the string "Test"
"""

from typing import Union, Tuple
from flask import Blueprint, jsonify, request
from werkzeug.wrappers import Response

from app.models import Sensor

api_bp = Blueprint('api', __name__)


@api_bp.route('/', methods=['GET'])
def index():
    """Index route for the API blueprint"""
    return "API Blueprint"


@api_bp.route('/test', methods=['GET'])
def test():
    """Test route for the API blueprint"""
    return "Test"

    @api_bp.route('/sensors', methods=['GET', 'POST'])
    def sensors() -> Union[Response, Tuple[Response, int]]:
        """
        Handles GET and POST requests to the /sensors route.
        GET: Returns a list of all sensors in the database.
        POST: Adds a new sensor to the database.
        """

        print(f"Request method: {request.method}")

        if request.method == 'GET':
            sensors_list = [sensor.to_dict() for sensor in Sensor.query.all()]
            return jsonify(sensors_list), 200

        elif request.method == 'POST':
            if not request.json:
                return jsonify({"error": "Bad Request", "message": "Body cannot be empty"}), 400

            required_fields = ['sensor_id', 'serial_number',
                               'sensor_name', 'latitude', 'longitude', 'owner_id']
            if not all(field in request.json for field in required_fields):
                return jsonify({"error": "Bad Request", "message": "Missing values"}), 400

            if Sensor.query.filter_by(sensor_id=request.json['sensor_id']).first():
                return jsonify({"error": "Bad Request", "message": "Sensor already exists"}), 400

            # Hier die Logik zum Hinzufügen des Sensors zur Datenbank einfügen.
            # Beispiel: new_sensor = Sensor(...)
            # db.session.add(new_sensor)
            # db.session.commit()

            return jsonify({"message": "Sensor successfully added"}), 201

        return jsonify({"error": "Method Not Allowed"}), 405
