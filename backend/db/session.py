from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from core.config import config

engine = create_engine(config.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
