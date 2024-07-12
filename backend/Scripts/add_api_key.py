import os
import sys
import uuid
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

# Konfiguration der Datenbankverbindung
DATABASE_URL = 'postgresql://thor_user:zoRRo123@localhost/thor_db'

# Erstellung der Engine und Session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)
    profile_picture = Column(String(255))


class ApiKey(Base):
    __tablename__ = 'apikeys'
    api_key_id = Column(Integer, primary_key=True)
    api_key = Column(String(255), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)

    user = relationship('User', backref='apikeys')


def generate_api_key():
    """Generiert einen neuen API-Schlüssel."""
    return str(uuid.uuid4())


def create_api_key(user_id, api_key):
    """Fügt einen neuen API-Schlüssel für einen Benutzer hinzu."""
    new_api_key = ApiKey(api_key=api_key, user_id=user_id)
    session.add(new_api_key)
    session.commit()
    return new_api_key


def main():
    user_id = input("Bitte geben Sie die Benutzer-ID ein: ")
    try:
        user_id = int(user_id)
    except ValueError:
        print("Ungültige Benutzer-ID. Bitte geben Sie eine gültige Zahl ein.")
        sys.exit(1)

    user = session.query(User).filter_by(user_id=user_id).first()
    if not user:
        print(f"Benutzer mit ID {user_id} existiert nicht.")
        sys.exit(1)

    api_key = generate_api_key()
    new_api_key = create_api_key(user_id, api_key)
    print(
        f"Neuer API-Schlüssel für Benutzer-ID {user_id} hinzugefügt: {new_api_key.api_key}")


if __name__ == "__main__":
    main()
