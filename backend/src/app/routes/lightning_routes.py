from fastapi import APIRouter, HTTPException
from app.schemas.lightning_schema import Lightning
from app.services.lightning_service import LightningService

router = APIRouter()


@router.get("/", response_model=list[Lightning])
async def get_lightning_data():
    try:
        return LightningService.get_all_lightning_data()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/", response_model=Lightning)
async def add_lightning_data(lightning: Lightning):
    try:
        return LightningService.add_lightning_data(lightning)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
