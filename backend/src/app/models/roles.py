from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID
import uuid
from ..database import Base


class Role(Base):
    __tablename__ = "roles"

    id = Column(UUID(as_uuid=True), primary_key=True,
                default=uuid.uuid4, unique=True, nullable=False)
    name = Column(String, unique=True, nullable=False)

    def __repr__(self):
        return f"<Role(id={self.id}, name={self.name})>"
