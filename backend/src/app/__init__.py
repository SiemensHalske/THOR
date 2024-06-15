"""
This file is the entry point of the FastAPI application.
"""

from fastapi import FastAPI

from .routes.api_routes import router as api_router
from .routes.user_routes import router as user_router
from .routes.sensor_routes import router as sensor_router
from .routes.lightning_routes import router as lightning_router

# Erstellen der FastAPI-Anwendung
app = FastAPI()

# Inkludieren der Routen
app.include_router(api_router, prefix="/api", tags=["api"])
app.include_router(user_router, prefix="/users", tags=["users"])
app.include_router(sensor_router, prefix="/sensors", tags=["sensors"])
app.include_router(lightning_router, prefix="/lightning", tags=["lightning"])


# Root-Endpoint
@app.get("/")
async def root():
    """
    Root-Endpoint of the THOR API

    Returns:
        dict: A welcome message
    """
    return {"message": "Welcome to the THOR API"}
