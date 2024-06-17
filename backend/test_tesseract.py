from PIL import Image
import pytesseract

# Pfad zu Tesseract (falls nicht im PATH)
# Bei Windows:
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Bild laden
image = Image.open('/home/ftpuser/files/sql.png')

# OCR durchführen
text = pytesseract.image_to_string(image, lang='eng')  # 'eng' für Englisch, 'deu' für Deutsch etc.

print(text)
