"use client";

import React, { useRef, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import KML from "ol/format/KML";
import "ol/ol.css";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import { Icon, Style } from "ol/style";

interface Marker {
    latitude: number;
    longitude: number;
    intensity: number;
}

interface SensorMapProps {
    center: [number, number];
    zoom?: number;
    visible?: boolean;
    kmlFilePath?: string; // KML-Dateipfad optional gemacht
    markers: Marker[];
    locationEnabled: boolean;
}

const SensorMap: React.FC<SensorMapProps> = ({
    center,
    zoom = 12.5,
    visible = true,
    kmlFilePath,
    markers,
    locationEnabled,
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const layers = [];

        const tileLayer = new TileLayer({
            source: new OSM(),
            visible: visible,
        });
        layers.push(tileLayer);

        if (kmlFilePath) {
            const vectorSource = new VectorSource({
                url: kmlFilePath,
                format: new KML(),
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
            });

            layers.push(vectorLayer);
        }

        if (mapInstanceRef.current) {
            mapInstanceRef.current.setTarget(undefined);
        }

        const map = new Map({
            target: mapContainerRef.current as HTMLElement,
            layers: layers,
            view: new View({
                center: fromLonLat(center),
                zoom: zoom,
            }),
        });

        // Add markers if locationEnabled is true
        if (locationEnabled) {
            const markerSource = new VectorSource();
            markers.forEach((marker) => {
                const feature = new Feature({
                    geometry: new Point(
                        fromLonLat([marker.longitude, marker.latitude])
                    ),
                });
                feature.setStyle(
                    new Style({
                        image: new Icon({
                            src: "/path/to/marker-icon.png", // Pfad zum Marker-Icon
                            scale: marker.intensity / 100, // Beispiel für Intensität basierte Skalierung
                        }),
                    })
                );
                markerSource.addFeature(feature);
            });

            const markerLayer = new VectorLayer({
                source: markerSource,
            });

            map.addLayer(markerLayer);
        }

        mapInstanceRef.current = map;

        return () => {
            map.setTarget(undefined); // Clean up the map instance on unmount
        };
    }, [center, zoom, visible, kmlFilePath, markers, locationEnabled]);

    return (
        <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />
    );
};

export default SensorMap;
