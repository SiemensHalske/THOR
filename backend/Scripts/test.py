import wetteronline

# Definiere den Standort
location_name = "New York"

# Hole die URL für den Standort
location = wetteronline.location(location_name)
print(f"URL für den Standort: {location.url}")

# Hole die Wetterdaten für den Standort
weather = wetteronline.weather(location.url)

# Geben Sie alle verfügbaren Wetterdaten aus
weather_data = vars(weather)
print(f"Wetterdaten für {location_name}: {weather_data}")
