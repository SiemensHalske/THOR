// src/app/about/page.tsx

import * as React from "react";
import {
    Container,
    Typography,
    Grid,
    Paper,
    Divider,
    Box,
} from "@mui/material";
import { Nature, Speed, CloudQueue } from "@mui/icons-material";
import styles from "./about.module.css";

const About = () => {
    return (
        <Container maxWidth="md" className={styles.container}>
            <Typography variant="h3" component="h1" gutterBottom>
                About THOR
            </Typography>

            <Paper elevation={3} className={styles.paper}>
                <Typography variant="h4" component="h2" gutterBottom>
                    The THOR Project
                </Typography>
                <Divider className={styles.divider} />
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Nature fontSize="large" className={styles.icon} />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" component="h3" gutterBottom>
                            Project goal
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            className={styles.paragraph}
                        >
                            The aim of this project is to capture and visualize
                            environmental data (temperature, air pressure,
                            humidity) using a BME280 sensor and an ESP32
                            microcontroller. The collected data is transmitted
                            to a backend server, which is implemented in Python
                            using Flask and Waitress or Gunicorn. From there,
                            the data is forwarded to a frontend, developed using
                            React and Next.js, to display and visualize it in
                            real-time.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Box mt={4}>
                <Paper elevation={3} className={styles.paper}>
                    <Typography variant="h5" component="h3" gutterBottom>
                        Motivation
                    </Typography>
                    <Divider className={styles.divider} />
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Speed fontSize="large" className={styles.icon} />
                        </Grid>
                        <Grid item xs>
                            <Typography
                                variant="body1"
                                paragraph
                                className={styles.paragraph}
                            >
                                Monitoring environmental parameters is crucial
                                in various fields such as agriculture, weather
                                forecasting, and building automation. By
                                capturing and analyzing this data, informed
                                decisions can be made, leading to more efficient
                                resource utilization and an improvement in
                                quality of life. Additionally, data
                                visualization allows for an intuitive
                                representation of trends and patterns that would
                                otherwise be difficult to discern.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                className={styles.paragraph}
                            >
                                A long-term goal of this project is to develop
                                small-scale, hyperlocal forecasts based on
                                sensor data. The idea is that all sensors will
                                eventually connect and exchange data with each
                                other, enabling more precise and up-to-date
                                forecasts. This interconnected sensor technology
                                could, for example, help identify microclimates
                                in urban areas and monitor specific
                                environmental conditions in real-time.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            <Box mt={4}>
                <Paper elevation={3} className={styles.paper}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <CloudQueue
                                fontSize="large"
                                className={styles.icon}
                            />
                        </Grid>
                        <Grid item xs>
                            <Typography
                                variant="body1"
                                paragraph
                                className={styles.paragraph}
                            >
                                This project aims to create a flexible and
                                expandable platform that can be used in both
                                educational and research environments. The use
                                of open-source technologies ensures that the
                                solution remains cost-effective and adaptable.
                                Furthermore, the project promotes the
                                application of modern web technologies and
                                microcontroller programming, providing learners
                                with practical skills in these promising areas.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                className={styles.paragraph}
                            >
                                Although the comprehensive networking of sensors
                                and hyperlocal forecasts are still futuristic
                                concepts, this project lays the foundation for
                                this visionary development. The continuous
                                expansion and improvement of the system could
                                ultimately lead to a new era of environmental
                                monitoring and prediction.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
};

export default About;
