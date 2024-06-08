// src/app/dashboard/sensor-data/page.tsx

"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useSearchParams } from "next/navigation";
import DashboardLayout from "../DashboardLayout";
import SensorDetail from "../../../components/SensorDetail/SensorDetail";
import styles from "./SensorDetail-page.module.css";

const sensors = [
    {
        id: 0,
        temperature: 22.5,
        humidity: 55,
        pressure: 1013,
        serialNumber: "SN12351",
        image: "/sensor1.webp",
    },
    {
        id: 1,
        temperature: 22.5,
        humidity: 55,
        pressure: 1013,
        serialNumber: "SN12351",
        image: "/sensor1.webp",
    },
    {
        id: 2,
        temperature: 21.8,
        humidity: 60,
        pressure: 1012,
        serialNumber: "SN12352",
        image: "/sensor1.webp",
    },
    {
        id: 3,
        temperature: 23.1,
        humidity: 58,
        pressure: 1011,
        serialNumber: "SN12353",
        image: "/sensor1.webp",
    },
    {
        id: 4,
        temperature: 24.2,
        humidity: 53,
        pressure: 1010,
        serialNumber: "SN12354",
        image: "/sensor1.webp",
    },
    {
        id: 5,
        temperature: 20.9,
        humidity: 65,
        pressure: 1014,
        serialNumber: "SN12355",
        image: "/sensor1.webp",
    },
    {
        id: 6,
        temperature: 22.0,
        humidity: 56,
        pressure: 1015,
        serialNumber: "SN12356",
        image: "/sensor1.webp",
    },
    {
        id: 7,
        temperature: 23.2,
        humidity: 57,
        pressure: 1016,
        serialNumber: "SN12357",
        image: "/sensor1.webp",
    },
    {
        id: 8,
        temperature: 21.5,
        humidity: 54,
        pressure: 1017,
        serialNumber: "SN12358",
        image: "/sensor1.webp",
    },
    {
        id: 9,
        temperature: 22.8,
        humidity: 59,
        pressure: 1018,
        serialNumber: "SN12359",
        image: "/sensor1.webp",
    },
    {
        id: 10,
        temperature: 23.0,
        humidity: 55,
        pressure: 1019,
        serialNumber: "SN12360",
        image: "/sensor1.webp",
    },
    {
        id: 11,
        temperature: 21.9,
        humidity: 60,
        pressure: 1020,
        serialNumber: "SN12361",
        image: "/sensor1.webp",
    },
    {
        id: 12,
        temperature: 23.3,
        humidity: 58,
        pressure: 1021,
        serialNumber: "SN12362",
        image: "/sensor1.webp",
    },
    {
        id: 13,
        temperature: 22.4,
        humidity: 55,
        pressure: 1022,
        serialNumber: "SN12363",
        image: "/sensor1.webp",
    },
    {
        id: 14,
        temperature: 21.7,
        humidity: 54,
        pressure: 1023,
        serialNumber: "SN12364",
        image: "/sensor1.webp",
    },
    {
        id: 15,
        temperature: 24.1,
        humidity: 53,
        pressure: 1024,
        serialNumber: "SN12365",
        image: "/sensor1.webp",
    },
    {
        id: 16,
        temperature: 20.8,
        humidity: 65,
        pressure: 1025,
        serialNumber: "SN12366",
        image: "/sensor1.webp",
    },
];

const SensorDataPage = () => {
    const searchParams = useSearchParams();
    const sensorId = searchParams.get("sensorId");

    const sensor = sensors.find((sensor) => sensor.id === Number(sensorId));

    return (
        <DashboardLayout>
            <Box className={styles.container}>
                <Typography variant="h4" gutterBottom className={styles.title}>
                    Sensor Details for:
                </Typography>
                {sensor && (
                    <>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Card className={styles.sensorCard}>
                                    <CardContent
                                        className={styles.sensorCardContent}
                                    >
                                        <img
                                            src={sensor.image}
                                            alt={`Sensor ${sensor.id}`}
                                            className={styles.sensorImage}
                                        />
                                        <Box>
                                            <Typography
                                                variant="body1"
                                                gutterBottom
                                            >
                                                Sensor ID: <strong>{sensor.id}</strong>
                                            </Typography>
                                            <Typography variant="body1">
                                                Serial Number:{" "}
                                                <strong>{sensor.serialNumber}</strong>
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <SensorDetail
                            id={sensor.id}
                            temperature={sensor.temperature}
                            humidity={sensor.humidity}
                            pressure={sensor.pressure}
                        />
                    </>
                )}
            </Box>
        </DashboardLayout>
    );
};

export default SensorDataPage;
