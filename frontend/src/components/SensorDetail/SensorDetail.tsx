"use client";

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import styles from "./SensorDetail.module.css";

interface SensorDetailProps {
    id: number;
    temperature: number;
    humidity: number;
    pressure: number;
}

const SensorDetail: React.FC<SensorDetailProps> = ({
    id,
    temperature,
    humidity,
    pressure,
}) => {
    return (
        <Box className={styles.detailContainer}>
            <Typography variant="h4" gutterBottom>
            </Typography>
            <Box className={styles.cardContainer}>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Temperature
                        </Typography>
                        <Typography variant="h2" color="primary">
                            {temperature} °C
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Humidity
                        </Typography>
                        <GaugeChart
                            id={`humidity-gauge-${id}`}
                            nrOfLevels={40}
                            percent={humidity / 100}
                            textColor="#000000"
                            arcsLength={[
                                0.1, // 0-10% (rot)
                                0.1, // 10-20% (rot)
                                0.05, // 20-25% (rot)
                                0.05, // 25-30% (dunkelorange)
                                0.05, // 30-35% (orange)
                                0.05, // 35-40% (hellorange)
                                0.05, // 40-45% (gelb)
                                0.05, // 45-50% (gelbgrün)
                                0.05, // 50-55% (grün)
                                0.05, // 55-60% (gelbgrün)
                                0.05, // 60-65% (gelb)
                                0.05, // 65-70% (hellorange)
                                0.05, // 70-75% (orange)
                                0.05, // 75-80% (dunkelorange)
                                0.2, // 80-100% (rot)
                            ]}
                            colors={[
                                "#ff0000", // 0-10% (rot)
                                "#ff0000", // 10-20% (rot)
                                "#ff4500", // 20-25% (rot)
                                "#ff8c00", // 25-30% (dunkelorange)
                                "#ffa500", // 30-35% (orange)
                                "#ffac12", // 35-40% (hellorange)
                                "#ffff00", // 40-45% (gelb)
                                "#adff2f", // 45-50% (gelbgrün)
                                "#00ff00", // 50-55% (grün)
                                "#adff2f", // 55-60% (gelbgrün)
                                "#ffff00", // 60-65% (gelb)
                                "#ffac12", // 65-70% (hellorange)
                                "#ffa500", // 70-75% (orange)
                                "#ff8c00", // 75-80% (dunkelorange)
                                "#ff0000", // 80-100% (rot)
                            ]}
                            arcPadding={0.01} // Verringern Sie den Wert von arcPadding
                            arcWidth={0.3}
                            className={styles.gauge}
                        />
                    </CardContent>
                </Card>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Pressure
                        </Typography>
                        <Typography variant="h2" color="primary">
                            {pressure} hPa
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default SensorDetail;
