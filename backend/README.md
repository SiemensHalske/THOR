# Backend Project

## Table of Contents

- [Backend Project](#backend-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction

This project is the backend for the THOR application, responsible for handling data related to users, sensors, and lightning detections. It is built with Python and Flask, and follows a modular structure for scalability and maintainability.

## Features

-   User authentication and management
-   Sensor data handling
-   Lightning data processing
-   RESTful API

## Getting Started

### Prerequisites

-   Python 3.8 or higher
-   pip (Python package installer)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/backend-project.git
    cd backend-project
    ```

2. Create and activate a virtual environment:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Usage

Running the Server
Set up environment variables by creating a .env file in the root directory and adding the required variables.

Start the server:

```bash
python src/app/main.py
```

The server will be running at `http://localhost:5000`.

## Running Tests

Ensure the virtual environment is activated.

Run the tests:

```bash
pytest
```

## Folder Structure

The project is structured as follows:

```plaintext
backend/
├── src/
│   ├── __init__.py
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── sensor.py
│   │   │   └── lightning.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── user_routes.py
│   │   │   ├── sensor_routes.py
│   │   │   └── lightning_routes.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── user_service.py
│   │   │   ├── sensor_service.py
│   │   │   └── lightning_service.py
│   │   ├── controllers/
│   │   │   ├── __init__.py
│   │   │   ├── user_controller.py
│   │   │   ├── sensor_controller.py
│   │   │   └── lightning_controller.py
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── user_schema.py
│   │   │   ├── sensor_schema.py
│   │   │   └── lightning_schema.py
│   │   ├── utils/
│   │   │   ├── __init__.py
│   │   │   ├── security.py
│   │   │   └── helpers.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_user.py
│   │   ├── test_sensor.py
│   │   ├── test_lightning.py
│   │   └── test_main.py
├── requirements.txt
├── README.md
└── .env
```

## Environment Variables

Create a `.env` file in the root directory and add the required environment variables:

```ini
FLASK_APP=src/app/main.py
FLASK_ENV=development
DATABASE_URL=sqlite:///db.sqlite3
SECRET_KEY=your_secret_key
```

## Contributing

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact

Hendrik Siemens - [siemenshendrik1@gmail.com](mailto:siemenshendrik1@gmail.com)

Project Link: [THOR](https://www.github.com/SiemensHalske/THOR)
