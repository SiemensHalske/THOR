// src/app/dashboard/page.tsx

"use client";

import React from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
} from "@mui/material";
import styles from "./dashboard.module.css";
import Link from "next/link";
import {
    Map as MapIcon,
    BarChart,
    FlashOn,
    Settings,
    NotificationsActive,
    History,
} from "@mui/icons-material";

const DashboardPage = () => {
    return (
        <Container maxWidth={false} disableGutters className={styles.container}>
            <Box className={styles.mainNoSidebar}>
                <Typography variant="h4" gutterBottom>
                    Welcome to the Dashboard
                </Typography>
                <Typography variant="body1" paragraph>
                    Use the cards below to navigate through different sections
                    of the dashboard. Here you can monitor and analyze sensor
                    data, view maps, and manage system settings.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Link href="/dashboard/sensor-map" passHref>
                            <Card className={styles.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <MapIcon fontSize="large" />
                                            <Box ml={2}>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    Sensor Map
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    View and interact with the
                                                    sensor map.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href="/dashboard/sensor-data" passHref>
                            <Card className={styles.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <BarChart fontSize="large" />
                                            <Box ml={2}>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    Sensor Data
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Monitor and analyze sensor
                                                    data.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href="/dashboard/lightning-data" passHref>
                            <Card className={styles.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <FlashOn fontSize="large" />
                                            <Box ml={2}>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    Lightning Data
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    View lightning data and
                                                    statistics.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href="/dashboard/alarm-system" passHref>
                            <Card className={styles.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <NotificationsActive fontSize="large" />
                                            <Box ml={2}>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    Alarm System
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Manage the alarm system.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href="/dashboard/history" passHref>
                            <Card className={styles.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <History fontSize="large" />
                                            <Box ml={2}>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    History
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    View historical data and
                                                    trends.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href="/dashboard/settings" passHref>
                            <Card className={styles.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <Settings fontSize="large" />
                                            <Box ml={2}>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    Settings
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Manage system settings.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DashboardPage;
