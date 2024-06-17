"use client";

import * as React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Box,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./security-settings.module.css";

const SecuritySettingsContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

const SecuritySettingsPage: React.FC = () => {
    const [settings, setSettings] = React.useState({
        twoFactorAuth: false,
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
        <SecuritySettingsContainer maxWidth="sm">
            <Typography variant="h4" className={styles.pageTitle}>
                Security Settings
            </Typography>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={settings.twoFactorAuth}
                                    onChange={handleChange}
                                    name="twoFactorAuth"
                                    color="primary"
                                />
                            }
                            label="Enable Two-Factor Authentication"
                            className={styles.checkboxLabel}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Current Password"
                            type="password"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="New Password"
                            type="password"
                            className={styles.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Confirm New Password"
                            type="password"
                            className={styles.textField}
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
        </SecuritySettingsContainer>
    );
};

export default SecuritySettingsPage;
