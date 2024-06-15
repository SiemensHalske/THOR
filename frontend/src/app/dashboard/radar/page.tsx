"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Paper,
} from "@mui/material";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import styles from "./Radar.module.css";

const RadarPage = () => {
    const [layerName, setLayerName] = useState("Regenradar");
    const mapRef = useRef<Map | null>(null);
    const layerUrls: Record<string, string> = {
        Regenradar: "/radar/regenradar.png",
        Blitzradar: "/radar/blitzradar.png",
        Warnungen_Gemeinden: "/radar/warnungen_gemeinden.png",
    };

    const imageExtents: Record<string, [number, number, number, number]> = {
        Regenradar: [5.866, 47.275, 15.041, 55.058],
        Blitzradar: [5.866, 47.275, 15.041, 55.058],
        Warnungen_Gemeinden: [5.866, 47.275, 15.041, 55.058],
    };

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                view: new View({
                    center: fromLonLat([10.4515, 51.1657]),
                    zoom: 6,
                }),
            });
        }

        if (mapRef.current) {
            const imageLayer = new ImageLayer({
                source: new Static({
                    url: layerUrls[layerName],
                    imageExtent: imageExtents[layerName],
                }),
            });

            const layers = mapRef.current.getLayers().getArray();
            if (layers.length > 1) {
                mapRef.current.removeLayer(layers[layers.length - 1]);
            }
            mapRef.current.addLayer(imageLayer);
        }
    }, [layerName]);

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
                        <MenuItem value="Regenradar">Regenradar</MenuItem>
                        <MenuItem value="Blitzradar">Blitzradar</MenuItem>
                        <MenuItem value="Warnungen_Gemeinden">
                            Warnungen Gemeinden
                        </MenuItem>
                    </Select>
                </FormControl>
                <Paper className={styles.mapPaper}>
                    <div id="map" className={styles.mapContainer}></div>
                </Paper>
            </div>
        </div>
    );
};

export default RadarPage;
