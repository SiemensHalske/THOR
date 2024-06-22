"""
Filename: your_module_name.py
Author: Hendrik Siemens
Date: 2024-06-18
Description:
    This module provides the configuration settings for the Gunicorn web server.
    It specifies the host and port on which the server should listen for incoming requests,
    as well as the number of worker processes to spawn to handle these requests.

Classes:
    No classes defined in this module.

Functions:
    No functions defined in this module.

Usage Example:
    This configuration file is used by Gunicorn to start the THOR application server.
    It specifies the host and port on which the server should listen for incoming requests,
    as well as the number of worker processes to spawn to handle these requests.
    
Notes:
    - Gunicorn is a popular WSGI HTTP server for Python web applications.
    - It is used to serve the THOR application and handle incoming requests.
    - The configuration settings in this file are used by Gunicorn to start the server.

References:
    - https://gunicorn.org/
    - https://docs.gunicorn.org/en/stable/settings.html
"""

bind = "0.0.0.0:5000"
workers = 3
