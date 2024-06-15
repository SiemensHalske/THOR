"use client";

import React, { useState } from "react";
import Head from "next/head";
import {
    Container,
    Card,
    CardContent,
    CardActions,
    Typography,
    Switch,
    FormControlLabel,
    Button,
    Box,
    Grid,
} from "@mui/material";
import styles from "./Settings.module.css";

const SettingsPage = () => {
    const [notifications, setNotifications] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState(false);

    const handleNotificationsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNotifications(event.target.checked);
    };

    const handleAutoRefreshChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAutoRefresh(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log("Settings saved:", { notifications, autoRefresh });
    };

    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Container maxWidth="md" className={styles.container}>
                <Typography variant="h4" className={styles.title}>
                    Dashboard Settings
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Notifications
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Enable or disable notifications for
                                        important updates and alerts.
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={notifications}
                                                onChange={
                                                    handleNotificationsChange
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Enable Notifications"
                                        className={styles.formElement}
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() =>
                                            setNotifications(!notifications)
                                        }
                                    >
                                        {notifications ? "Disable" : "Enable"}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Auto-Refresh
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Automatically refresh the dashboard to
                                        keep data up to date.
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={autoRefresh}
                                                onChange={
                                                    handleAutoRefreshChange
                                                }
                                                color="primary"
                                            />
                                        }
                                        label="Enable Auto-Refresh"
                                        className={styles.formElement}
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() =>
                                            setAutoRefresh(!autoRefresh)
                                        }
                                    >
                                        {autoRefresh ? "Disable" : "Enable"}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box mt={4} display="flex" justifyContent="center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={styles.saveButton}
                        >
                            Save Settings
                        </Button>
                    </Box>
                </form>
            </Container>
        </div>
    );
};

export default SettingsPage;
