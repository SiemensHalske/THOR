import base64
import os
from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)
from app import db
from app.models import User
# from app import db

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    print(f'Email: {email}')
    print(f'Password: {password}')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token}), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401


@auth_bp.route('/save-settings', methods=['POST'])
@jwt_required()
def save_settings():
    data = request.get_json()
    user_id = get_jwt_identity()

    user = User.query.get(user_id)

    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Update profile picture path if provided
    if 'profilePicture' in data and isinstance(data['profilePicture'], str):
        try:
            # Decode the Base64 image
            img_data = base64.b64decode(data['profilePicture'])
            img_filename = f'{user_id}_profile_picture.png'
            img_path = os.path.join('static/images/profile_pictures',
                                    img_filename
                                    )

            # Ensure the directory exists
            os.makedirs(os.path.dirname(img_path), exist_ok=True)

            # Save the image to the specified path
            with open(img_path, 'wb') as f:
                f.write(img_data)

            # Update user's profile picture path
            user.profile_picture = img_path

        except Exception as e:
            return jsonify(
                {'error': f'Failed to save profile picture: {str(e)}'}), 500

    # Update email notifications if provided
    if 'emailNotifications' in data:
        email_notifications = data['emailNotifications']
        if email_notifications is not None and isinstance(email_notifications,
                                                          bool
                                                          ):
            user.email_notifications = email_notifications

    # Update push notifications if provided
    if 'pushNotifications' in data:
        push_notifications = data['pushNotifications']
        if push_notifications is not None and isinstance(push_notifications,
                                                         bool
                                                         ):
            user.push_notifications = push_notifications

    try:
        db.session.commit()
        return jsonify({'message': 'Settings saved successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
