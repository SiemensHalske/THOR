import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const WMSTileLayer = ({ url, layers }: { url: string; layers: string }) => {
    const map = useMap();

    useEffect(() => {
        const wmsLayer = L.tileLayer.wms(url, {
            layers,
            format: "image/png",
            transparent: true,
            attribution: "© DWD",
        });

        map.addLayer(wmsLayer);

        return () => {
            map.removeLayer(wmsLayer);
        };
    }, [url, layers, map]);

    return null;
};

export default WMSTileLayer;
