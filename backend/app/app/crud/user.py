#!/usr/bin/env python3
from typing import Optional, Any

from fastapi.security import (
    OAuth2PasswordBearer, OAuth2PasswordRequestForm
)
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder

# from core.config import settings
from app.crud.base import CRUDBase, CreateSchemaType, ModelType
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.utils import utils

# from crud.base import CreateSchemaType, ModelType

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def create_user(
            self, db: Session, obj_in: CreateSchemaType
            # , is_admin: bool = False
        ) -> ModelType:
        obj_in_data = jsonable_encoder(obj_in)
        first_name = obj_in_data.get('first_name')
        last_name = obj_in_data.get('last_name')
        username = obj_in_data.get('username')
        password = utils.get_hashed_password(obj_in_data.get('password'))
        db_obj = self.model(
            first_name=first_name, last_name=last_name,
            username=username, password=password,
            # is_admin=is_admin
        )  # type: ignore
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    # def create_admin_user(self, db: Session, obj_in: CreateSchemaType, is_admin: bool = True) -> ModelType:
    #     return self.create_user(db, obj_in, is_admin)

    def get_user(self, db: Session, username: str):
        return db.query(self.model).filter(self.model.username == username).first()

    def authenticate_user(self, db: Session, username: str, password: str) -> Any:
        user = self.get_user(db, username)
        if not user:
            return False
        if not utils.verify_password(password, user.password):
            return False
        return user


user = CRUDUser(User)
