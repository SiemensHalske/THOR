"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Slider, Typography } from "@mui/material";
import SensorMap from "../../../components/SensorMap/SensorMap";
import styles from "./lightning-data.module.css";

const LightningData = () => {
    const [locationEnabled, setLocationEnabled] = useState(false);
    const [lightningData, setLightningData] = useState<
        { latitude: number; longitude: number; intensity: number }[]
    >([]);
    const [intensityRange, setIntensityRange] = useState<number[]>([0, 100]);
    const [timeRange, setTimeRange] = useState<number[]>([0, 60]);
    const [serviceStatus, setServiceStatus] = useState<string>("warning");

    const toggleLocation = () => {
        setLocationEnabled(!locationEnabled);
        // Simulate service status change
        setServiceStatus(locationEnabled ? "inactive" : "active");
    };

    const handleIntensityChange = (
        event: Event,
        newValue: number | number[]
    ) => {
        setIntensityRange(newValue as number[]);
    };

    const handleTimeChange = (event: Event, newValue: number | number[]) => {
        setTimeRange(newValue as number[]);
    };

    useEffect(() => {
        // Fetch lightning data from the backend
        fetch("/api/lightning")
            .then((response) => response.json())
            .then((data) => setLightningData(data))
            .catch((error) =>
                console.error("Error fetching lightning data:", error)
            );

        // Simulate fetching service status
        fetch("/api/service-status")
            .then((response) => response.json())
            .then((data) => setServiceStatus(data.status))
            .catch((error) =>
                console.error("Error fetching service status:", error)
            );
    }, []);

    return (
        <Box className={styles.container}>
            <Box className={styles.map}>
                <SensorMap
                    markers={lightningData}
                    locationEnabled={locationEnabled}
                    center={[8.251120510754511, 51.73967409793433]}
                />
            </Box>
            <Box className={styles.panels}>
                <Box className={styles.legend}>
                    <h2 className={styles.legendHeader}>Legend</h2>
                    <p>
                        <strong>New lightning strikes</strong> have a red circle
                        which gets smaller and disappears when it gets older
                        than 60 seconds.
                    </p>
                    <p>
                        The color of filled circles represents the age of
                        strikes up to 60 minutes. New strikes are{" "}
                        <span style={{ color: "yellow" }}>yellow</span>. The
                        older they get, the darker the color.{" "}
                        <span style={{ color: "brown" }}>Dark brown</span> is
                        equal to almost 60 minutes. Those strikes will vanish
                        soon.
                    </p>
                    <table className={styles.legendTable}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>New strikes</td>
                                <td
                                    className={styles.legendColorBox}
                                    style={{ backgroundColor: "yellow" }}
                                ></td>
                            </tr>
                            <tr>
                                <td>Older strikes</td>
                                <td
                                    className={styles.legendColorBox}
                                    style={{ backgroundColor: "red" }}
                                ></td>
                            </tr>
                            <tr>
                                <td>Almost 60 minutes</td>
                                <td
                                    className={styles.legendColorBox}
                                    style={{ backgroundColor: "brown" }}
                                ></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        On higher zoom levels, the thunder front of current
                        strikes is shown as a{" "}
                        <span
                            style={{
                                color: "#ffffe6",
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            white
                        </span>{" "}
                        transparent growing circle (speed of sound). It gets
                        more transparent while traveling and disappears after a
                        while.
                    </p>
                </Box>
                <Box className={styles.panel}>
                    <h2 className={styles.PanelHeader}>
                        Configuration / Filtering
                    </h2>
                    <Button
                        variant="contained"
                        color={locationEnabled ? "success" : "error"}
                        onClick={toggleLocation}
                    >
                        {locationEnabled
                            ? "Disable Location"
                            : "Enable Location"}
                    </Button>
                    <Box className={styles.statusIndicator}>
                        <Box
                            className={`${styles.statusLight} ${
                                serviceStatus === "active" ? styles.active : ""
                            }`}
                        ></Box>
                        <Typography className={styles.statusLabel}>
                            Active
                        </Typography>
                        <Box
                            className={`${styles.statusLight} ${
                                serviceStatus === "warning"
                                    ? styles.warning
                                    : ""
                            }`}
                        ></Box>
                        <Typography className={styles.statusLabel}>
                            Warning
                        </Typography>
                        <Box
                            className={`${styles.statusLight} ${
                                serviceStatus === "inactive"
                                    ? styles.inactive
                                    : ""
                            }`}
                        ></Box>
                        <Typography className={styles.statusLabel}>
                            Inactive
                        </Typography>
                    </Box>
                    <Box className={styles.sliders}>
                        <Box>
                            <Typography id="intensity-slider" gutterBottom>
                                Intensity Range
                            </Typography>
                            <Slider
                                value={intensityRange}
                                onChange={handleIntensityChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100}
                            />
                        </Box>
                        <Box>
                            <Typography id="time-slider" gutterBottom>
                                Time Range (minutes)
                            </Typography>
                            <Slider
                                value={timeRange}
                                onChange={handleTimeChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={60}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LightningData;
