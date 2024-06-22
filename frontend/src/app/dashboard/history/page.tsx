// src/app/history/page.tsx

"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { Line } from "react-chartjs-2";
import styles from "./history.module.css";
import "chart.js/auto"; // Importiert die Chart.js-Auto-Registrierung

const History = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [sensorType, setSensorType] = useState("");

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Temperature",
                data: [30, 25, 28, 33, 26, 30],
                fill: false,
                borderColor: "#1229aa",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const handleStartDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setEndDate(event.target.value);
    };

    const handleSensorTypeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSensorType(event.target.value);
    };

    return (
        <Box className={styles.container}>
            <Typography variant="h4" className={styles.header}>
                Historical Data
            </Typography>
            <Box className={styles.filterContainer}>
                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className={styles.filterItem}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className={styles.filterItem}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    select
                    label="Sensor Type"
                    value={sensorType}
                    onChange={handleSensorTypeChange}
                    className={styles.filterItem}
                >
                    <MenuItem value="temperature">Temperature</MenuItem>
                    <MenuItem value="humidity">Humidity</MenuItem>
                    <MenuItem value="pressure">Pressure</MenuItem>
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.filterButton}
                >
                    Apply Filters
                </Button>
            </Box>
            <Box className={styles.chartContainer}>
                <Box className={styles.chartCard}>
                    <Typography className={styles.chartTitle}>
                        Temperature Trend
                    </Typography>
                    <Line data={data} options={options} />
                </Box>
                <Box className={styles.chartCard}>
                    <Typography className={styles.chartTitle}>
                        Humidity Trend
                    </Typography>
                    <Line data={data} options={options} />
                </Box>
                <Box className={styles.chartCard}>
                    <Typography className={styles.chartTitle}>
                        Pressure Trend
                    </Typography>
                    <Line data={data} options={options} />
                </Box>
                <Box className={styles.chartCard}>
                    <Typography className={styles.chartTitle}>
                        Combined Trends
                    </Typography>
                    <Line data={data} options={options} />
                </Box>
            </Box>
        </Box>
    );
};

export default History;
