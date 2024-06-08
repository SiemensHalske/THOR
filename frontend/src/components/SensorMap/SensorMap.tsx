// src/components/SensorMap/SensorMap.tsx

"use client";

import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point as PointGeom } from "ol/geom";
import { Icon, Style } from "ol/style";
import { Select } from "ol/interaction";
import { click } from "ol/events/condition";
import { useRouter } from "next/navigation";
import styles from "./SensorMap.module.css";

interface SensorMapProps {
    markers: { id: number; lat: number; lon: number }[];
}

const SensorMap: React.FC<SensorMapProps> = ({ markers }) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (mapContainerRef.current) {
            const vectorSource = new VectorSource({
                features: markers.map(
                    (marker) =>
                        new Feature({
                            geometry: new PointGeom(
                                fromLonLat([marker.lon, marker.lat])
                            ),
                            id: marker.id,
                        })
                ),
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    image: new Icon({
                        src: "/marker-icon2.png", // Pfad zu deinem Marker-Icon
                        anchor: [0.5, 1],
                        scale: 2,
                    }),
                }),
            });

            const map = new Map({
                target: mapContainerRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                    vectorLayer,
                ],
                view: new View({
                    center: fromLonLat([8.251045, 51.739668]), // Beispiel-Koordinaten
                    zoom: 12,
                }),
            });

            const selectClick = new Select({
                condition: click,
                filter: (feature) => feature.getGeometry() instanceof PointGeom,
            });

            selectClick.on("select", (event) => {
                const selectedFeature = event.selected[0];
                if (selectedFeature) {
                    const sensorId = selectedFeature.get("id");
                    router.push(`/dashboard/sensor-data?sensorId=${sensorId}`);
                }
            });

            map.addInteraction(selectClick);

            return () => {
                map.setTarget(undefined);
            };
        }
    }, [markers, router]);

    return <div ref={mapContainerRef} className={styles.mapContainer}></div>;
};

export default SensorMap;
