"""
Filename: forms/LoginForm.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module defines the login form for the THOR application.
    The form includes fields for the user's email and password, as well as a submit button to log in.

Classes:
    - LoginForm: A class that defines the login form for the THOR application.

Functions:
    - No functions defined in this module.

Usage Example:
    The LoginForm class is used to create a login form for the THOR application.
    It includes fields for the user's email and password, as well as a submit button to log in.

Notes:
    - The login form is used to authenticate users and grant access to the application.
    - The form includes fields for the user's email and password, which are validated on submission.
    - The form data is processed by the backend to authenticate the user and grant access to the application.

References:
    - https://flask.palletsprojects.com/en/2.0.x/patterns/wtforms/
    - https://wtforms.readthedocs.io/en/2.3.x/
    - https://flask-wtf.readthedocs.io/en/0.15.x/
"""

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')
