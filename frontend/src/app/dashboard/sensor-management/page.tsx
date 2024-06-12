// src/app/test/page.tsx

"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    Slider,
    Grid,
} from "@mui/material";
import { addSensor, Sensor } from "../../../features/sensor/sensorSlice";
import { AppState } from "../../store";
import styles from "./SensorManagement.module.css";

const SensorManagement = () => {
    const sensors = useSelector((state: AppState) => state.sensor.sensors);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [newSensor, setNewSensor] = useState({
        id: 0,
        temperature: "",
        humidity: "",
        pressure: "",
        serialNumber: "",
        image: "",
    });

    const [updateInterval, setUpdateInterval] = useState(30);
    const [temperatureThreshold, setTemperatureThreshold] = useState(20);
    const [humidityThreshold, setHumidityThreshold] = useState(50);
    const [pressureThreshold, setPressureThreshold] = useState(1013);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSensor((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddSensor = () => {
        const sensor: Sensor = {
            id: sensors.length + 1,
            temperature: parseFloat(newSensor.temperature),
            humidity: parseFloat(newSensor.humidity),
            pressure: parseFloat(newSensor.pressure),
            serialNumber: newSensor.serialNumber,
            image: newSensor.image,
        };
        dispatch(addSensor(sensor));
        handleClose();
    };

    return (
        <Box className={styles.container}>
            <Typography variant="h4" className={styles.header}>
                Sensor Management
            </Typography>
            <Box className={styles.content}>
                <Box className={styles.sensorRegistry}>
                    <Typography variant="h6">Sensor Registry</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                onClick={handleOpen}
                                className={styles.button}
                            >
                                Add Sensor
                            </Button>
                            <Button className={styles.button}>
                                Set Active
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button className={styles.button}>
                                Remove Sensor
                            </Button>
                            <Button className={styles.button}>
                                Set Inactive
                            </Button>
                        </Grid>
                    </Grid>
                    <table className={styles.sensorTable}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Temperature</th>
                                <th>Humidity</th>
                                <th>Pressure</th>
                                <th>Serial Number</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sensors.map((sensor: any, index: any) => (
                                <tr key={index}>
                                    <td>{sensor.id}</td>
                                    <td>{sensor.temperature}</td>
                                    <td>{sensor.humidity}</td>
                                    <td>{sensor.pressure}</td>
                                    <td>{sensor.serialNumber}</td>
                                    <td>{sensor.image}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
                <Box className={styles.sensorSettings}>
                    <Typography variant="h6">Sensor Settings</Typography>
                    <Box className={styles.settingsContainer}>
                        <Box className={styles.buttonsContainer}>
                            <Button className={styles.settings_button}>
                                Start Monitoring
                            </Button>
                            <Button className={styles.settings_button}>
                                Run Calibration
                            </Button>
                            <Button className={styles.settings_button}>
                                Reset
                            </Button>
                        </Box>
                        <Box className={styles.slidersContainer}>
                            <Typography>
                                Update Interval: {updateInterval}s
                            </Typography>
                            <Slider
                                value={updateInterval}
                                onChange={(e, newValue) =>
                                    setUpdateInterval(newValue as number)
                                }
                                aria-labelledby="update-interval-slider"
                                min={0}
                                max={120}
                            />
                            <Typography>
                                Temperature Threshold: {temperatureThreshold}
                            </Typography>
                            <Slider
                                value={temperatureThreshold}
                                onChange={(e, newValue) =>
                                    setTemperatureThreshold(newValue as number)
                                }
                                aria-labelledby="temperature-threshold-slider"
                                min={-50}
                                max={50}
                            />
                            <Typography>
                                Humidity Threshold: {humidityThreshold}
                            </Typography>
                            <Slider
                                value={humidityThreshold}
                                onChange={(e, newValue) =>
                                    setHumidityThreshold(newValue as number)
                                }
                                aria-labelledby="humidity-threshold-slider"
                                min={0}
                                max={100}
                            />
                            <Typography>
                                Pressure Threshold: {pressureThreshold}
                            </Typography>
                            <Slider
                                value={pressureThreshold}
                                onChange={(e, newValue) =>
                                    setPressureThreshold(newValue as number)
                                }
                                aria-labelledby="pressure-threshold-slider"
                                min={900}
                                max={1100}
                            />
                        </Box>
                    </Box>
                    <Box className={styles.marqueeContainer}>
                        <Typography variant="body1" className={styles.marquee}>
                            Laufband für Nachrichten zu den Sensoren
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.dialogTitle}>
                    Add a New Sensor
                </DialogTitle>
                <DialogContent className={styles.dialogContent}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Temperature"
                        name="temperature"
                        type="number"
                        fullWidth
                        value={newSensor.temperature}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Humidity"
                        name="humidity"
                        type="number"
                        fullWidth
                        value={newSensor.humidity}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Pressure"
                        name="pressure"
                        type="number"
                        fullWidth
                        value={newSensor.pressure}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Serial Number"
                        name="serialNumber"
                        fullWidth
                        value={newSensor.serialNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Image URL"
                        name="image"
                        fullWidth
                        value={newSensor.image}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions className={styles.dialogActions}>
                    <Button
                        onClick={handleClose}
                        className={styles.dialogButton}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleAddSensor}
                        className={styles.dialogButton}
                    >
                        Add Sensor
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SensorManagement;
