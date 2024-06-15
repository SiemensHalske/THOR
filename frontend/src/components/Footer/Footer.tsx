// src/components/Footer/Footer.tsx

import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <Box component="footer" className={styles.footer}>
            <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    <Link href="/sitemap">Sitemap</Link>
                    <Link href="/datenschutz">Datenschutz</Link>
                    <Link href="/impressum">Impressum</Link>
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                    style={{ marginTop: "10px", color: "inherit" }}
                >
                    © THOR by Hendrik Siemens. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
