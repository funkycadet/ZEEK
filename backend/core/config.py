#!/usr/bin/env python3
import os
import secrets

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    # SECRET_KEY: str = os.environ.get('SECRET_KEY')
    SECRET_KEY = secrets.token_urlsafe(32)
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    HOST = os.environ.get('API_HOST')
    PORT = os.environ.get('API_PORT')


config = Config()
