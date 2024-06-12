"""
This file contains the service class for the lightning data.
It provides methods to get all lightning data and to add
new lightning data to the database.
"""

from sqlalchemy.orm import Session
from ..models.lightning import Lightning as LightningModel
from ..schemas.lightning_schema import Lightning
from ..database import get_db


class LightningService:
    """
    This class provides methods to
    get all lightning data and to add
    """
    @staticmethod
    def get_all_lightning_data(db: Session):
        """
        Get all lightning data from the database.
        """
        return db.query(LightningModel).all()

    @staticmethod
    def add_lightning_data(db: Session, lightning: Lightning):
        """
        Add new lightning data to the database.
        """
        db_lightning = LightningModel(
            timestamp=lightning.timestamp,
            latitude=lightning.latitude,
            longitude=lightning.longitude,
            intensity=lightning.intensity,
        )
        db.add(db_lightning)
        db.commit()
        db.refresh(db_lightning)
        return db_lightning
