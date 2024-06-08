// src/app/contact/page.tsx

import * as React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    Box,
} from "@mui/material";
import { Phone, LocationOn, Email } from "@mui/icons-material";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <Container maxWidth="md" className={styles.container}>
            <Typography variant="h3" component="h1" gutterBottom>
                Contact Us
            </Typography>
            <Grid container spacing={3} className={styles.contactInfo}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} className={styles.paper}>
                        <Phone fontSize="large" className={styles.icon} />
                        <Typography variant="h6" component="h2">
                            Phone
                        </Typography>
                        <Typography variant="body1">+49 151 2659 7476</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} className={styles.paper}>
                        <LocationOn fontSize="large" className={styles.icon} />
                        <Typography variant="h6" component="h2">
                            Address
                        </Typography>
                        <Typography variant="body1">
                            Bluddenstraße 5, 59329 Wadersloh
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper
                        elevation={3}
                        className={`${styles.paper} ${styles.socialPaper}`}
                    >
                        <Email fontSize="large" className={styles.icon} />
                        <Typography variant="h6" component="h2">
                            Email & Social Links
                        </Typography>
                        <Typography variant="body1">
                            Email:{" "}
                            <a
                                href="mailto:siemenshendrik1@gmail.com"
                                className={styles.link}
                            >
                                siemenshendrik1@gmail.com
                            </a>
                        </Typography>
                        <Typography variant="body1">
                            GitHub:{" "}
                            <a
                                href="https://github.com/SiemensHalske"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                github.com/SiemensHalske
                            </a>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Paper elevation={3} className={styles.paper}>
                <form noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="message"
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} className={styles.buttonContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Contact;
