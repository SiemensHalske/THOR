"""
This module contains the Lightning model.
"""

import uuid
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from ..database import Base


class Lightning(Base):
    """
    This class represents the Lightning model.
    """
    __tablename__ = "lightning"

    id = Column(UUID(as_uuid=True), primary_key=True,
                default=uuid.uuid4, unique=True, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow, nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    intensity = Column(Float, nullable=False)
    description = Column(String, nullable=True)

    def __repr__(self):
        return f"<Lightning(id={self.id}, timestamp={self.timestamp}, latitude={self.latitude}, longitude={self.longitude}, intensity={self.intensity})>"
