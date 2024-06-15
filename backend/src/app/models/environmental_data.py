from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from ..database import Base


class EnvironmentalData(Base):
    __tablename__ = "environmental_data"

    id = Column(UUID(as_uuid=True), primary_key=True,
                default=uuid.uuid4, unique=True, nullable=False)
    sensor_id = Column(UUID(as_uuid=True), ForeignKey(
        "sensors.id"), nullable=False)
    temperature = Column(Float, nullable=False)
    humidity = Column(Float, nullable=False)
    pressure = Column(Float, nullable=False)
    recorded_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    sensor = relationship("Sensor", back_populates="environmental_data")

    def __repr__(self):
        return f"<EnvironmentalData(id={self.id}, sensor_id={self.sensor_id}, temperature={self.temperature}, humidity={self.humidity}, pressure={self.pressure})>"
