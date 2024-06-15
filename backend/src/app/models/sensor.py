from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from ..database import Base


class Sensor(Base):
    __tablename__ = "sensors"

    id = Column(UUID(as_uuid=True), primary_key=True,
                default=uuid.uuid4, unique=True, nullable=False)
    name = Column(String, nullable=False)
    location = Column(String, nullable=True)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    environmental_data = relationship(
        "EnvironmentalData", back_populates="sensor")
    sensor_data = relationship("SensorData", back_populates="sensor")
    user_id = Column(UUID(as_uuid=True), ForeignKey(
        "users.id"), nullable=False)

    user = relationship("User", back_populates="sensors")

    def __repr__(self):
        return f"<Sensor(id={self.id}, name={self.name}, latitude={self.latitude}, longitude={self.longitude})>"
