// src/app/downloads/page.tsx

"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./downloads.module.css";

const Downloads = () => {
    const handleDownload = (filename: string) => {
        // Implement the download logic here
        console.log(`Downloading ${filename}`);
    };

    return (
        <Box className={styles.container}>
            <Typography variant="h4" className={styles.header}>
                Downloads
            </Typography>
            <Box className={styles.gridContainer}>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Report 1
                    </Typography>
                    <Typography>
                        Detailed temperature report for the last month.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("report1.pdf")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Report 2
                    </Typography>
                    <Typography>
                        Humidity levels report for the last quarter.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("report2.pdf")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Report 3
                    </Typography>
                    <Typography>Pressure data for the past year.</Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("report3.pdf")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Data Set 1
                    </Typography>
                    <Typography>
                        Raw temperature sensor data in CSV format.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("data1.csv")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Data Set 2
                    </Typography>
                    <Typography>
                        Raw humidity sensor data in CSV format.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("data2.csv")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Data Set 3
                    </Typography>
                    <Typography>
                        Raw pressure sensor data in CSV format.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("data3.csv")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Monthly Summary
                    </Typography>
                    <Typography>
                        Summary of all sensor data for the last month.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("monthly_summary.pdf")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Quarterly Summary
                    </Typography>
                    <Typography>
                        Summary of all sensor data for the last quarter.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("quarterly_summary.pdf")}
                    >
                        Download
                    </Button>
                </Box>
                <Box className={styles.card}>
                    <Typography className={styles.cardTitle}>
                        Yearly Summary
                    </Typography>
                    <Typography>
                        Summary of all sensor data for the last year.
                    </Typography>
                    <Button
                        className={styles.cardButton}
                        onClick={() => handleDownload("yearly_summary.pdf")}
                    >
                        Download
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Downloads;
