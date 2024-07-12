"use client";

import * as React from "react";
import {
    Container,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Box,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./notification-settings.module.css";

const NotificationSettingsContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

const NotificationSettingsPage: React.FC = () => {
    const [settings, setSettings] = React.useState({
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <NotificationSettingsContainer maxWidth="sm">
            <Typography variant="h4" className={styles.pageTitle}>
                Notification Settings
            </Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={settings.emailNotifications}
                                    onChange={handleChange}
                                    name="emailNotifications"
                                    color="primary"
                                />
                            }
                            label="Email Notifications"
                            className={styles.checkboxLabel}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={settings.smsNotifications}
                                    onChange={handleChange}
                                    name="smsNotifications"
                                    color="primary"
                                />
                            }
                            label="SMS Notifications"
                            className={styles.checkboxLabel}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={settings.pushNotifications}
                                    onChange={handleChange}
                                    name="pushNotifications"
                                    color="primary"
                                />
                            }
                            label="Push Notifications"
                            className={styles.checkboxLabel}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </NotificationSettingsContainer>
    );
};

export default NotificationSettingsPage;
