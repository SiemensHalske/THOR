// src/app/page.tsx

import * as React from "react";
import {
    Typography,
    Container,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    Button,
} from "@mui/material";
import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
    return (
        <Container maxWidth="md" className={styles.container}>
            <Typography variant="h3" component="h1" gutterBottom>
                THOR - Environmental Monitoring Project
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
                Welcome to the THOR project, where we monitor environmental data
                using sensors and visualize it with modern web technologies.
            </Typography>

            <Grid container spacing={4} style={{ marginTop: 20 }}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} className={styles.paper}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Project Requirements
                        </Typography>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Must-Have Requirements:
                        </Typography>
                        <List>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Data Transmission: ESP32 sends environmental data from BME280 sensor to the backend server." />
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Backend Server: Python with Flask and Waitress or Gunicorn." />
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Frontend: React and Next.JS based frontend to display current sensor data." />
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Visualizations: Implementation of charts to visualize data over time." />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} className={styles.paper}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Nice-to-Have Requirements:
                        </Typography>
                        <List>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Integration of additional sensors for more environmental data." />
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Complex analysis and visualization features like heatmaps or long-term trends." />
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Notification system for threshold values (e.g., high temperatures)." />
                            </ListItem>
                            <ListItem className={styles.listItem}>
                                <ListItemText primary="Optimization of data transmission for efficiency and reliability." />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>

            <Typography
                variant="h5"
                component="h2"
                gutterBottom
                className={styles.sectionTitle}
            >
                Future Visualizations
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
                Placeholder for future implementation of dynamic charts and
                graphs to visualize environmental data trends.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={styles.learnMoreButton}
            >
                Learn More
            </Button>
            <Link href="/dashboard" passHref>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.dashboardButton}
                >
                    Go to Dashboard
                </Button>
            </Link>
        </Container>
    );
};

export default Home;
