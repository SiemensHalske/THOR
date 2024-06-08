# THOR: Environmental Data Transmission with BME280 and ESP32

This project involves the transmission of environmental data collected by a BME280 sensor to a server via an ESP32 microcontroller. The data is then visualized in a React frontend.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

THOR is a project designed to capture and visualize environmental data such as temperature, humidity, and pressure. The data is collected using a BME280 sensor and transmitted via an ESP32 microcontroller to a backend server. The server processes and stores the data, which is then visualized in real-time using a React frontend.

## Features

- **Data Transmission**: Send environmental data from the BME280 sensor to the server.
- **Backend Server**: Python-based server using Flask for handling data.
- **Frontend**: React and Next.js for real-time data visualization.
- **Extensibility**: Easily integrate additional sensors and expand functionality.

## Getting Started

### Prerequisites

- **Hardware**: BME280 sensor, ESP32 microcontroller.
- **Software**: Arduino IDE, Node.js, Python.

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/SiemensHalske/THOR.git
   cd THOR
    ```

2. Setup the ESP32

- Install the Arduino IDE.
- Install the required libraries:
    - Adafruit_Sensor
    - Adafruit_BME280
- Load the provided Arduino sketch onto the ESP32.

3. Setup the Backend

Navigate to the backend directory:

```
cd backend
```

Create a virtual environment and install dependencies:

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Setup the Frontend

Navigate to the frontend directory:

```
cd frontend
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

## Usage

1. Run the Backend Server

```sh
cd backend
source venv/bin/activate
flask run
```

2. Run the Frontend Application

```sh
cd frontend
npm run dev
```

3. Monitor the ESP32 Output

- Ensure the ESP32 is connected to your Wi-Fi network.
- The ESP32 will start transmitting data to the backend server.

## Project Structure

The project is organized into the following directories:

```
THOR/
├── backend/               # Backend server files
│   ├── app.py             # Main application file
│   ├── requirements.txt   # Python dependencies
│   └── ...                # Other backend files
├── frontend/              # Frontend application files
│   ├── src/               # Source files
│   ├── public/            # Public assets
│   ├── package.json       # Node.js dependencies
│   └── ...                # Other frontend files
├── README.md              # Project README
└── ...                    # Other project files
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or additions.

## License

Distributed under the GNU General Public License v3.0. See `LICENSE` for more information.
