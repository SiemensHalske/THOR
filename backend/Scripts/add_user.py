import psycopg2
from werkzeug.security import generate_password_hash

# Verbindung zur PostgreSQL-Datenbank herstellen
conn = psycopg2.connect(
    dbname="heal",
    user="postgres",
    password="cooper2912",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

# Beispiel-E-Mail und Passwort
email = "shordiedandeluff@gmail.com"
password = "daisycutter"
username = "katha"
profile_picture = "default.jpg"

# Passwort hashen
hashed_password = generate_password_hash(password)

# SQL-Abfrage zum Einfügen des Benutzers
insert_query = """
INSERT INTO users (email, password, username, profile_image, created_at, updated_at)
VALUES (%s, %s, %s, %s, NOW(), NOW())
"""

# Werte für die SQL-Abfrage
values = (email, hashed_password, username, profile_picture)

# Ausführen der SQL-Abfrage
cursor.execute(insert_query, values)
conn.commit()

# Benutzer einfügen bestätigen
print(f"Benutzer {email} wurde erfolgreich eingefügt.")

# Verbindung schließen
cursor.close()
conn.close()
