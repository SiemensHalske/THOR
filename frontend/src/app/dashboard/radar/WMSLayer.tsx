import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface WMSLayerProps {
    url: string;
    layerName: string;
}

const WMSLayer: React.FC<WMSLayerProps> = ({ url, layerName }) => {
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

export default WMSLayer;
