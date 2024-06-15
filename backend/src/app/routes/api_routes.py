from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def api_info():
    return {"message": "API Overview"}
