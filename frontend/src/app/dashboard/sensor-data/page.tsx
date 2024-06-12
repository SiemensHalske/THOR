"use client";

import React, { Suspense } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useSearchParams } from "next/navigation";
import DashboardLayout from "../DashboardLayout";
import Image from "next/image";
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
    // ... (weitere Sensordaten)
];

const SensorDataContent = () => {
    const searchParams = useSearchParams();
    const sensorId = searchParams.get("sensorId");

    const sensor = sensors.find((sensor) => sensor.id === Number(sensorId));

    return (
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
                                    <Image
                                        src={sensor.image}
                                        alt={`Sensor ${sensor.id}`}
                                        className={styles.sensorImage}
                                        width={200}
                                        height={200}
                                    />
                                    <Box>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                        >
                                            Sensor ID:{" "}
                                            <strong>{sensor.id}</strong>
                                        </Typography>
                                        <Typography variant="body1">
                                            Serial Number:{" "}
                                            <strong>
                                                {sensor.serialNumber}
                                            </strong>
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
    );
};

const SensorDataPage = () => {
    return (
        <DashboardLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <SensorDataContent />
            </Suspense>
        </DashboardLayout>
    );
};

export default SensorDataPage;
