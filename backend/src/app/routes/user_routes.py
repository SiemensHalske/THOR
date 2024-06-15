from fastapi import APIRouter, HTTPException
from app.schemas.user_schema import User, UserCreate
from app.services.user_service import UserService

router = APIRouter()


@router.get("/", response_model=list[User])
async def get_users():
    """
    Get all users

    Returns:
        list[User]: A list of all users
    """
    try:
        return UserService.get_all_users()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e


@router.post("/", response_model=User)
async def create_user(user: UserCreate):
    """
    Create a new user

    Args:
        user (UserCreate): The user to create

    Returns:
        User: The created user

    Raises:
        HTTPException: If an error occurs during the creation of the user
    """
    try:
        return UserService.create_user(user)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
