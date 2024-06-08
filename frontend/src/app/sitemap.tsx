// src/app/sitemap.tsx

import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const SitemapPage = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Sitemap
            </Typography>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/dashboard/lightning-data">Lightning Data</Link>
                </li>
                <li>
                    <Link href="/dashboard/sensor-data">Sensor Data</Link>
                </li>
                <li>
                    <Link href="/dashboard/sensor-map">Sensor Map</Link>
                </li>
                <li>
                    <Link href="/datenschutz">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="/impressum">Impressum</Link>
                </li>
            </ul>
        </Box>
    );
};

export default SitemapPage;
