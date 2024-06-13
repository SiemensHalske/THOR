"use client";

import React, { useRef, useEffect } from "react";
import { Map } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import { Feature } from "ol";
import VectorSource from "ol/source/Vector";
import { Style, Icon } from "ol/style";
import "ol/ol.css";

interface SensorMapProps {
    markers: { latitude: number; longitude: number; intensity: number }[];
    locationEnabled: boolean;
    center: [number, number];
    visible?: boolean;
}

const SensorMap: React.FC<SensorMapProps> = ({
    markers,
    locationEnabled,
    center,
    visible = true,
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const vectorSource = new VectorSource({
                features: markers.map((marker) => {
                    const feature = new Feature({
                        geometry: new Point(
                            fromLonLat([marker.longitude, marker.latitude])
                        ),
                    });
                    feature.setStyle(
                        new Style({
                            image: new Icon({
                                src: "/path/to/lightning-icon.png", // Path to the lightning icon
                                scale: 0.05,
                            }),
                        })
                    );
                    return feature;
                }),
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
            });

            const tileLayer = new TileLayer({
                source: new OSM(),
                visible: visible,
            });

            const map = new Map({
                target: mapContainerRef.current as HTMLElement,
                layers: [tileLayer, vectorLayer],
                view: new View({
                    center: fromLonLat(center),
                    zoom: 12.5,
                }),
            });

            return () => map.setTarget(undefined); // Clean up the map instance on unmount
        }
    }, [markers, center, visible]);

    return (
        <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    );
};

export default SensorMap;
