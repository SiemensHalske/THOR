from datetime import datetime
from pydantic import BaseModel


class Lightning(BaseModel):
    id: int
    timestamp: datetime
    latitude: float
    longitude: float
    intensity: float

    class Config:
        orm_mode = True
