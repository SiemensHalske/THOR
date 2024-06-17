import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

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

export default WMSLayer;
