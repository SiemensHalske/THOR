"use client";

import React, { Suspense } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
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
    {
        id: 1,
        temperature: 23.0,
        humidity: 57,
        pressure: 1012,
        serialNumber: "SN12352",
        image: "/sensor1.webp",
    },
    {
        id: 2,
        temperature: 21.5,
        humidity: 54,
        pressure: 1014,
        serialNumber: "SN12353",
        image: "/sensor1.webp",
    },
    {
        id: 3,
        temperature: 24.0,
        humidity: 60,
        pressure: 1011,
        serialNumber: "SN12354",
        image: "/sensor1.webp",
    },
    {
        id: 4,
        temperature: 20.5,
        humidity: 52,
        pressure: 1015,
        serialNumber: "SN12355",
        image: "/sensor1.webp",
    },
    {
        id: 5,
        temperature: 25.0,
        humidity: 65,
        pressure: 1010,
        serialNumber: "SN12356",
        image: "/sensor1.webp",
    },
    {
        id: 6,
        temperature: 22.0,
        humidity: 55,
        pressure: 1013,
        serialNumber: "SN12357",
        image: "/sensor1.webp",
    },
    {
        id: 7,
        temperature: 23.5,
        humidity: 58,
        pressure: 1012,
        serialNumber: "SN12358",
        image: "/sensor1.webp",
    },
    {
        id: 8,
        temperature: 21.0,
        humidity: 53,
        pressure: 1014,
        serialNumber: "SN12359",
        image: "/sensor1.webp",
    },
    {
        id: 9,
        temperature: 24.5,
        humidity: 61,
        pressure: 1011,
        serialNumber: "SN12360",
        image: "/sensor1.webp",
    },
    {
        id: 10,
        temperature: 20.0,
        humidity: 50,
        pressure: 1015,
        serialNumber: "SN12361",
        image: "/sensor1.webp",
    },
    {
        id: 11,
        temperature: 25.5,
        humidity: 66,
        pressure: 1010,
        serialNumber: "SN12362",
        image: "/sensor1.webp",
    },
    {
        id: 12,
        temperature: 22.0,
        humidity: 55,
        pressure: 1013,
        serialNumber: "SN12363",
        image: "/sensor1.webp",
    },
    {
        id: 13,
        temperature: 23.0,
        humidity: 57,
        pressure: 1012,
        serialNumber: "SN12364",
        image: "/sensor1.webp",
    },
    {
        id: 14,
        temperature: 21.5,
        humidity: 54,
        pressure: 1014,
        serialNumber: "SN12365",
        image: "/sensor1.webp",
    },
    {
        id: 15,
        temperature: 24.0,
        humidity: 60,
        pressure: 1011,
        serialNumber: "SN12366",
        image: "/sensor1.webp",
    },
    {
        id: 16,
        temperature: 20.5,
        humidity: 52,
        pressure: 1015,
        serialNumber: "SN12367",
        image: "/sensor1.webp",
    },
    {
        id: 17,
        temperature: 25.0,
        humidity: 65,
        pressure: 1010,
        serialNumber: "SN12368",
        image: "/sensor1.webp",
    },
];

const SensorDataContent = () => {
    const searchParams = useSearchParams();
    const sensorId = searchParams.get("sensorId");
    const sensor = sensors.find((sensor) => sensor.id === Number(sensorId));
    const router = useRouter();

    if (!sensorId) {
        return (
            <Box className={`${styles.container} ${styles.footerSpacing}`}>
                <Typography variant="h4" gutterBottom className={styles.title}>
                    Sensor Overview
                </Typography>
                <Grid container spacing={3}>
                    {sensors.map((sensor) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={sensor.id}>
                            <Card
                                className={styles.sensorCard}
                                onClick={() =>
                                    router.push(`?sensorId=${sensor.id}`)
                                }
                            >
                                <CardContent
                                    className={styles.sensorCardContent}
                                >
                                    <Image
                                        src={sensor.image}
                                        alt={`Sensor ${sensor.id}`}
                                        className={styles.sensorImage}
                                        width={100}
                                        height={100}
                                    />
                                    <Typography variant="h6" gutterBottom>
                                        Sensor {sensor.id}
                                    </Typography>
                                    <Typography variant="body1">
                                        Temperature: {sensor.temperature}°C
                                    </Typography>
                                    <Typography variant="body1">
                                        Humidity: {sensor.humidity}%
                                    </Typography>
                                    <Typography variant="body1">
                                        Pressure: {sensor.pressure} hPa
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }

    return (
        <Box className={`${styles.container} ${styles.footerSpacing}`}>
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
