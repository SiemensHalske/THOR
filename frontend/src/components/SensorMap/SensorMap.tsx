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
import { Select } from "ol/interaction";

interface Marker {
    id: number;
    latitude: number;
    longitude: number;
    intensity: number;
}

interface SensorMapProps {
    center: [number, number];
    zoom?: number;
    visible?: boolean;
    kmlFilePath?: string;
    markers: Marker[];
    locationEnabled: boolean;
    onMarkerClick: (id: number) => void;
}

const SensorMap: React.FC<SensorMapProps> = ({
    center,
    zoom = 12.5,
    visible = true,
    kmlFilePath,
    markers,
    locationEnabled,
    onMarkerClick,
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

        if (locationEnabled) {
            const markerSource = new VectorSource();
            markers.forEach((marker) => {
                console.log("Adding marker: ", marker); // Debug: log marker data
                const feature = new Feature({
                    geometry: new Point(
                        fromLonLat([marker.longitude, marker.latitude])
                    ),
                });
                feature.setId(marker.id); // Correctly set the id
                feature.setStyle(
                    new Style({
                        image: new Icon({
                            src: "/marker-icon2.png",
                            scale: marker.intensity / 100,
                        }),
                    })
                );
                markerSource.addFeature(feature);
            });

            const markerLayer = new VectorLayer({
                source: markerSource,
            });

            map.addLayer(markerLayer);

            const select = new Select({
                layers: [markerLayer],
            });

            select.on("select", (event) => {
                if (event.selected.length > 0) {
                    const selectedFeature = event.selected[0];
                    const id = selectedFeature.getId();
                    console.log(`Feature selected: ${id}`); // Debug: log feature id
                    if (typeof id === "number") {
                        onMarkerClick(id);
                    }
                }
            });

            map.addInteraction(select);
        }

        mapInstanceRef.current = map;

        return () => {
            map.setTarget(undefined);
        };
    }, [
        center,
        zoom,
        visible,
        kmlFilePath,
        markers,
        locationEnabled,
        onMarkerClick,
    ]);

    return (
        <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />
    );
};

export default SensorMap;
