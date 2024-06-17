"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./Radar.module.css";

// Custom component to add the WMS layer
const WMSLayer = ({ url, layerName }: { url: string; layerName: string }) => {
    const map = useMap();

    useEffect(() => {
        const wmsLayer = L.tileLayer.wms(url, {
            layers: layerName,
            format: "image/png",
            transparent: true,
            attribution: "© DWD",
        });

        map.addLayer(wmsLayer);

        return () => {
            map.removeLayer(wmsLayer);
        };
    }, [url, layerName, map]);

    return null;
};

const RadarPage = () => {
    const [layerName, setLayerName] = useState("dwd:Niederschlagsradar");

    return (
        <div>
            <div className={styles.heroContainer}>
                <img
                    src="/radar-hero-bg.webp"
                    alt="Background Image"
                    className={styles.heroImage}
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
            </div>
        </div>
    );
};

export default RadarPage;
