// src/app/alarm-system/page.tsx

"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    TextField,
    Snackbar,
    Alert,
} from "@mui/material";
import styles from "./alarm-system.module.css";

const AlarmSystem = () => {
    const [open, setOpen] = useState(false);
    const [alarmThreshold, setAlarmThreshold] = useState({
        temperature: 0,
        humidity: 0,
        pressure: 0,
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAlarmThreshold((prev) => ({ ...prev, [name]: parseFloat(value) }));
    };

    const handleSave = () => {
        setSnackbarMessage("Alarm thresholds saved successfully!");
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box className={styles.container}>
            <Typography variant="h4" className={styles.header}>
                Alarm System
            </Typography>
            <Box className={styles.cardContainer}>
                <Box className={styles.card}>
                    <Typography variant="h6">Set Alarm Thresholds</Typography>
                    <TextField
                        label="Temperature Threshold"
                        name="temperature"
                        type="number"
                        fullWidth
                        value={alarmThreshold.temperature}
                        onChange={handleChange}
                        className={styles.textField}
                    />
                    <TextField
                        label="Humidity Threshold"
                        name="humidity"
                        type="number"
                        fullWidth
                        value={alarmThreshold.humidity}
                        onChange={handleChange}
                        className={styles.textField}
                    />
                    <TextField
                        label="Pressure Threshold"
                        name="pressure"
                        type="number"
                        fullWidth
                        value={alarmThreshold.pressure}
                        onChange={handleChange}
                        className={styles.textField}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        className={styles.saveButton}
                    >
                        Save Thresholds
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography variant="h6">Monitor Sensors</Typography>
                    {/* Inhalt für das Überwachen von Sensoren */}
                </Box>
                <Box className={styles.card}>
                    <Typography variant="h6">Notification Settings</Typography>
                    {/* Inhalt für Benachrichtigungseinstellungen */}
                </Box>
                <Box className={styles.card}>
                    <Typography variant="h6">System Logs</Typography>
                    {/* Inhalt für Systemprotokolle */}
                </Box>
                <Box className={styles.card}>
                    <Typography variant="h6">Recent Alerts</Typography>
                    {/* Inhalt für kürzliche Alarme */}
                </Box>
                <Box className={styles.card}>
                    <Typography variant="h6">Maintenance Schedule</Typography>
                    {/* Inhalt für Wartungspläne */}
                </Box>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                className={styles.snackbar}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    className={styles.alert}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AlarmSystem;
