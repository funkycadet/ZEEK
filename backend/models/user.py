#!/usr/bin/python3
""" Defines the User class"""
from models.todo_model import BaseModel
from sqlalchemy import String, Column, ForeignKey


class User(BaseModel):
    """This is the class for User
    Attributes:
        first_name: first_name
        last_name: last_name
        email: email address
        password: password for login
    """

    __tablename__= 'users'

    first_name = Column(String(128), nullable=True)
    last_name = Column(String(128), nullable=True)
    email: Column(String(128), nullable=False)
    password: Column(String(128), nullable=False)