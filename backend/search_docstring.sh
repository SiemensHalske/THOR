#!/bin/bash

# Verzeichnis, in dem nach .py-Dateien gesucht werden soll
directory="."

# Durchsuche alle .py-Dateien im angegebenen Verzeichnis, exklusive venv und __pycache__-Ordner
find "$directory" -name "*.py" -not -path "*/venv/*" -not -path "*/__pycache__/*" | while read -r file; do
    echo "Processing file: $file"
    
    # Extrahiere den Modul-Docstring
    awk 'BEGIN { docstring = 0 }
    /^"""/ { docstring += 1 }
    docstring == 1 { print; if (NR == 1 && $0 ~ /""".*"""/) docstring += 1 }
    docstring == 2 { print; exit }' "$file"
    
    echo
done
