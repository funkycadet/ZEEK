import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    # email: Optional[EmailStr] = None
    username: str = None


class UserBase(BaseModel):
    first_name: str
    last_name: str
    username: str
    # email: EmailStr


class UserInDB(UserBase):
    id: int
    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    password: str


class UserLoginBase(BaseModel):
    username: str
    password: str


class UserLogin(UserLoginBase):
    pass


class UserUpdate(UserBase):
    first_name: Optional[str]
    last_name: Optional[str]
    username: Optional[str]


class User(UserInDB):
    pass
