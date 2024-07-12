"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "./Radar.module.css";
import useMap from "react-leaflet";

// Dynamisches Laden von react-leaflet Komponenten
const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom component to add the WMS layer
const WMSLayer = dynamic(() => import("./WMSLayer"), { ssr: false });

const RadarPage: React.FC = () => {
    const [layerName, setLayerName] = useState("dwd:Niederschlagsradar");

    const legendContent = () => {
        switch (layerName) {
            case "dwd:Niederschlagsradar":
                return (
                    <Typography variant="body2" color="white">
                        {/*-- Regenradar --*/}
                        Zeigt die Niederschlagsintensität in der Region. <br />
                        <br />
                        <strong>Farbskala:</strong> <br />
                        <strong>Blau:</strong> Leichter Niederschlag <br />
                        <strong>Grün:</strong> Mäßiger Niederschlag <br />
                        <strong>Gelb:</strong> Starker Niederschlag <br />
                        <strong>Rot:</strong> Sehr starker Niederschlag <br />
                        <strong>Violett:</strong> Extrem starker Niederschlag{" "}
                    </Typography>
                );
            case "dwd:Blitzdichte":
                return (
                    <Typography variant="body2" color="white">
                        {/*-- Blitzdichte --*/}
                        Blitzradar: Zeigt die Blitzdichte in der Region.
                    </Typography>
                );
            case "dwd:Warnungen_Gemeinden":
                return (
                    <Typography variant="body2" color="white">
                        {/*-- Warnungen Gemeinden --*/}
                        Warnungen Gemeinden: Zeigt aktuelle Wetterwarnungen für
                        Gemeinden.
                    </Typography>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className={styles.heroContainer}>
                <Image
                    src="/radar-hero-bg.webp"
                    alt="Background Image"
                    className={styles.heroImage}
                    layout="fill"
                />
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>Radar</h1>
                    <h2 className={styles.heroSubtitle}>
                        Aktuelle Wetterradarbilder
                    </h2>
                </div>
            </div>
            <div className={styles.pageContainer}>
                <FormControl
                    variant="outlined"
                    className={styles.selectorContainer}
                    sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        borderRadius: "4px",
                        color: "white",
                        "& .MuiOutlinedInput-root": {
                            color: "white",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white",
                        },
                        "& .MuiInputLabel-root": {
                            color: "white",
                        },
                    }}
                >
                    <InputLabel id="layerSelectorLabel">
                        Wähle eine Karte
                    </InputLabel>
                    <Select
                        labelId="layerSelectorLabel"
                        id="layerSelector"
                        value={layerName}
                        onChange={(e) => setLayerName(e.target.value)}
                        label="Wähle eine Karte"
                    >
                        <MenuItem value="dwd:Niederschlagsradar">
                            Regenradar
                        </MenuItem>
                        <MenuItem value="dwd:Blitzdichte">Blitzradar</MenuItem>
                        <MenuItem value="dwd:Warnungen_Gemeinden">
                            Warnungen Gemeinden
                        </MenuItem>
                    </Select>
                </FormControl>
                <div className={styles.mapBox}>
                    <MapContainer
                        className={styles.mapContainer}
                        center={[51.1657, 10.4515]}
                        zoom={6}
                        style={{ height: "600px", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <WMSLayer
                            url="https://maps.dwd.de/geoserver/ows?"
                            layerName={layerName}
                        />
                    </MapContainer>
                </div>
                <div className={styles.legendBox}>
                    <div className={styles.legendTitle}>
                        <Typography variant="h6" color="white">
                            Legende
                        </Typography>
                    </div>
                    <div className={styles.legendContent}>
                        {legendContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RadarPage;
