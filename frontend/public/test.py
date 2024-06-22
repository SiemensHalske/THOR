import zipfile
import xml.etree.ElementTree as ET
import pandas as pd
import os

# Pfade anpassen
kmz_file_name = 'HydrantenplanWadersloh.kmz'
current_directory = os.getcwd()
kmz_file_path = os.path.join(current_directory, kmz_file_name)

# KMZ-Archiv extrahieren und die KML-Datei lesen
with zipfile.ZipFile(kmz_file_path, 'r') as kmz:
    kml_file_name = [name for name in kmz.namelist() if name.endswith('.kml')][0]
    kml_content = kmz.read(kml_file_name)

# KML-Datei parsen
root = ET.fromstring(kml_content)

# Namespace definieren
ns = {'kml': 'http://www.opengis.net/kml/2.2'}

# Funktion zur Rekursiven Extraktion der Koordinaten aus Placemark-Elementen
def extract_coordinates(element, ns):
    coordinates = []
    for placemark in element.findall('.//kml:Placemark', ns):
        for coord in placemark.findall('.//kml:coordinates', ns):
            coords_text = coord.text.strip()
            for coord_pair in coords_text.split():
                coordinates.append(coord_pair)
    return coordinates

# Alle Folder-Elemente durchsuchen und Koordinaten extrahieren
coordinates = []
for folder in root.findall('.//kml:Folder', ns):
    coordinates.extend(extract_coordinates(folder, ns))

# Koordinaten anzeigen
coordinates_df = pd.DataFrame(coordinates, columns=["Coordinates"])
print(coordinates_df.head())

# Speichern als CSV
coordinates_df.to_csv(os.path.join(current_directory, 'extracted_coordinates.csv'), index=False)
