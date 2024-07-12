#!/bin/bash

# Verzeichnis, das durchsucht werden soll
DIR="."

# Ausgabedatei
OUTPUT="output.pdf"

# Temporäre Datei für die Zusammenführung
TEMP_DIR=$(mktemp -d)
TEMP_FILE="$TEMP_DIR/temp.txt"

# Dateitypen, die konvertiert werden sollen
FILE_TYPES=("*.py" "*.html" "*.js" "*.tsx" "*.txt")

# Temporäre Datei leeren
> "$TEMP_FILE"

# Alle Dateien der angegebenen Typen zählen, ohne node_modules, __pycache__, /backend/app/static und die temporäre Datei
TOTAL_FILES=0
for FILE_TYPE in "${FILE_TYPES[@]}"; do
    TOTAL_FILES=$((TOTAL_FILES + $(find "$DIR" -type f -name "$FILE_TYPE" ! -path "*/node_modules/*" ! -path "*/__pycache__/*" ! -path "$TEMP_DIR/*" ! -path "*/backend/app/static/*" | wc -l)))
done

# Zähler für den Fortschritt
CURRENT_FILE=0
UPDATE_INTERVAL=100 # Fortschrittsanzeige alle 100 Dateien aktualisieren

# Alle Dateien der angegebenen Typen in der temporären Datei zusammenführen, ohne node_modules, __pycache__, /backend/app/static und die temporäre Datei
for FILE_TYPE in "${FILE_TYPES[@]}"; do
    for FILE in $(find "$DIR" -type f -name "$FILE_TYPE" ! -path "*/node_modules/*" ! -path "*/__pycache__/*" ! -path "$TEMP_DIR/*" ! -path "*/backend/app/static/*"); do
        CURRENT_FILE=$((CURRENT_FILE + 1))
        if (( CURRENT_FILE % UPDATE_INTERVAL == 0 )); then
            PERCENTAGE=$((CURRENT_FILE * 100 / TOTAL_FILES))
            echo -ne "Verarbeite Datei $CURRENT_FILE von $TOTAL_FILES ($PERCENTAGE%)\r"
        fi

        echo "Datei: $FILE" >> "$TEMP_FILE"
        echo "====================" >> "$TEMP_FILE"
        cat "$FILE" >> "$TEMP_FILE"
        echo -e "\n\n" >> "$TEMP_FILE"
    done
done

echo -ne "\n"

# Temporäre Datei in PDF umwandeln mit höherer Verbosität
pandoc "$TEMP_FILE" -o "$OUTPUT" --verbose

# Temporäre Dateien löschen
rm -r "$TEMP_DIR"

echo "PDF-Datei erstellt: $OUTPUT"
