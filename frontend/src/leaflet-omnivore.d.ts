declare module "leaflet-omnivore" {
    import * as L from "leaflet";

    interface Omnivore {
        kml: {
            parse: (data: string) => L.GeoJSON;
        };
    }

    const omnivore: Omnivore;
    export default omnivore;
}
