"""
This script calculates the vertices of a regular octagon given its center and radius.
"""

import math


def octagon_vertices(center_x, center_y, radius):
    """Calculates the vertices of a regular octagon given its center and radius."""

    # 360 degrees / 8 vertices = 45 degrees per vertex
    angle_increment = 2 * math.pi / 8
    vertices = []
    for i in range(8):
        angle = i * angle_increment
        x = center_x + radius * math.cos(angle)
        y = center_y + radius * math.sin(angle)
        vertices.append((x, y))
    return vertices


def main():
    """Prompts the user for center coordinates and radius, then prints the vertices."""

    while True:
        try:
            center_input = input("Enter the center coordinates (x,y): ")
            center_x, center_y = map(float, center_input.split(","))

            radius = float(input("Enter the radius of the octagon: "))

            if radius <= 0:
                raise ValueError("Radius must be positive.")

            break  # Exit the loop if the input is valid
        except ValueError:
            print(
                "Invalid input. Please enter coordinates in the format x,y and a positive radius.")

    vertices = octagon_vertices(center_x, center_y, radius)

    print("\nThe vertices of the octagon are:")
    for vertex in vertices:
        print(f"({vertex[0]:.2f}, {vertex[1]:.2f})")


if __name__ == "__main__":
    main()
