"use client";

import React, { useRef, useEffect } from "react";
import { Map } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import KML from "ol/format/KML";
import "ol/ol.css";

interface SensorMapProps {
    center: [number, number];
    zoom?: number;
    visible?: boolean;
    kmlFilePath: string;
}

const SensorMap: React.FC<SensorMapProps> = ({
    center,
    zoom = 12.5,
    visible = true,
    kmlFilePath,
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const vectorSource = new VectorSource({
            url: kmlFilePath,
            format: new KML(),
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        const tileLayer = new TileLayer({
            source: new OSM(),
            visible: visible,
        });

        if (mapInstanceRef.current) {
            mapInstanceRef.current.setTarget(undefined);
        }

        const map = new Map({
            target: mapContainerRef.current as HTMLElement,
            layers: [tileLayer, vectorLayer],
            view: new View({
                center: fromLonLat(center),
                zoom: zoom,
            }),
        });

        mapInstanceRef.current = map;

        return () => {
            map.setTarget(undefined); // Clean up the map instance on unmount
        };
    }, [center, zoom, visible, kmlFilePath]);

    return (
        <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />
    );
};

export default SensorMap;
