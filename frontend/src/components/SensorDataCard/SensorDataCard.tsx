// src/components/SensorDataCard/SensorDataCard.tsx

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "./SensorDataCard.module.css";

interface SensorDataCardProps {
    id: number;
    temperature: number;
    humidity: number;
    pressure: number;
}

const SensorDataCard: React.FC<SensorDataCardProps> = ({
    id,
    temperature,
    humidity,
    pressure,
}) => {
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Sensor ID: {id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Temperature: {temperature} °C
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Humidity: {humidity} %
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Pressure: {pressure} hPa
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SensorDataCard;
