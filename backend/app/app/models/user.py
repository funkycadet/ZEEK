#!/usr/bin/env python3
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
import datetime

from sqlalchemy import Column, Integer, String, DateTime, Boolean
from app.db.base_class import Base


class User(Base):
    """ This is the class for User
    Attributes:
        first_name: user's first name
        last_name: user's last name
        username: username for the user
        password: password for login
        session_id: manages user sessions
    """

    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(128), nullable=False)
    last_name = Column(String(128), nullable=False)
    # email = Column(String(250), nullable=False)
    username = Column(String(150), nullable=False, unique=True)
    password = Column(String(128), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)
    # tasks = relationship('Tasks', backref='tasks', lazy=True)


# class Tasks(Base):
#     """ Tasks model class
#     """
#     __tablename__ = 'tasks'

#     owner_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
#     task = Column(String(30), nullable=False)
#     description = Column(Text(3000), nullable=True)
#     category = relationship("Categories", backref='category', lazy=True)
#     created_at = Column(DateTime, default=datetime.datetime.utcnow)
#     updated_at = Column(DateTime, default=datetime.datetime.utcnow)


# class Categories(Base):
#     """ Categories model class
#     """
#     __tablename__ = 'category'
#     category = Column(String(25))
