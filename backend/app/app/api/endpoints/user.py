# from sentry_sdk import capture_exception
from typing import Any, List, Optional
from typing_extensions import Annotated
from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from jose import jwt

from app.api import deps
# from app.models import User as UserModel
from app.models import user as UserModel
from app.core.config import settings
from app.schemas.user import UserCreate, UserUpdate, User, UserLogin, Token
from app.utils import utils
from app.crud import user_crud

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/user/login")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/user/token")


async def get_current_user(
        db: Session = Depends(deps.get_db),
        token: str = Depends(oauth2_scheme)
    ):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = username
    except Exception as e:
        raise credentials_exception
    user = user_crud.get_user(db, username=token_data)
    if user is None:
        raise credentials_exception
    return user


router = APIRouter()


@router.post("/", response_model=User)
def create_user(*, db: Session = Depends(deps.get_db), user_in: UserCreate) -> Any:
    """
    create admin user.
    """
    if user_crud.get_user(db, user_in.username):
        raise HTTPException(
            status_code=400, detail="username associated with an account")
    try:
        user = user_crud.create_user(db, user_in)
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=500, detail="Server Side Error.")
    else:
        return user


@router.put("/", response_model=User)
def update_user(
    *,
    db: Session = Depends(deps.get_db),
    current_user: UserModel = Depends(get_current_user),
    user_in: UserUpdate
) -> Any:
    """
    Update a user.
    """
    user = current_user
    if not user:
        raise HTTPException(status_code=404, detail="user not found")

    try:
        user = user_crud.update(db=db, db_obj=user, obj_in=user_in)
    except Exception as _:
        raise HTTPException(status_code=500, detail="Server Side Error.")
    else:
        return user


@router.get("/me", response_model=User)
def read_user(
    *,
    db: Session = Depends(deps.get_db),
    current_user: UserModel = Depends(get_current_user),
) -> Any:
    """
    Read current user.
    """
    try:
        user = current_user
    except Exception as e:
        # capture_exception(e)
        # return e
        raise HTTPException(status_code=500, detail=f"Server Side Error. {e}")
    else:
        if not user:
            raise HTTPException(status_code=404, detail="user not found")
        return user


@router.post("/login")
def login_user(
    *,
    db: Session = Depends(deps.get_db),
    login_in: UserLogin,
) -> Any:
    user = user_crud.authenticate_user(db, login_in.username, login_in.password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRY_TIME)
    access_token = utils.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/token", response_model=Token)
async def login_for_access_token(
    *,
    db: Session = Depends(deps.get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = user_crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRY_TIME)
    access_token = utils.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

