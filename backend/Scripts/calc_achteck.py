"""
This script calculates the vertices of a regular octagon given its center and radius.
"""

import math
from geopy.distance import distance
from geopy.point import Point

# Ausgangskoordinaten
center_lat = 51.73907450226525
center_lon = 8.250903251575782
radius = 3000  # in Metern

# Winkel zwischen den Eckpunkten eines Achtecks
angle = 360 / 8

# Funktion zur Berechnung der neuen Koordinate basierend auf einem Winkel und einer Entfernung


def calculate_new_coordinate(center_point, angle_degrees, distance_m):
    angle_radians = math.radians(angle_degrees)
    destination = distance(meters=distance_m).destination(
        center_point, angle_degrees)
    return destination.latitude, destination.longitude


# Ausgangspunkt
center_point = Point(center_lat, center_lon)

# Berechnung der Eckpunkte des Achtecks
vertices = []
for i in range(8):
    angle_degrees = i * angle
    vertex = calculate_new_coordinate(center_point, angle_degrees, radius)
    vertices.append(vertex)

# Ausgabe der Koordinaten
for i, vertex in enumerate(vertices):
    lat, lon = vertex
    print(f"Vertex {i+1}: Latitude = {lat}, Longitude = {lon}")
