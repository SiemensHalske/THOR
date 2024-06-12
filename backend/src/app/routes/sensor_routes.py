from fastapi import APIRouter, HTTPException
from app.schemas.sensor_schema import Sensor
from app.services.sensor_service import SensorService

router = APIRouter()


@router.get("/", response_model=list[Sensor])
async def get_sensors():
    try:
        return SensorService.get_all_sensors()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/", response_model=Sensor)
async def add_sensor(sensor: Sensor):
    try:
        return SensorService.add_sensor(sensor)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
