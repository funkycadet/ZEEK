from fastapi import APIRouter

# from app.api.endpoints import sample
from app.api.endpoints import user

api_router = APIRouter()
# api_router.include_router(sample.router, prefix="/sample", tags=["sample"])
api_router.include_router(user.router, prefix="/user", tags=["user"])
