from contextlib import contextmanager
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

username = 'postgres'
password = 'postgres'
host = 'localhost'
port = '5432'
dbname = 'admin_dashboard'

DATABASE_URL = f"postgresql://{username}:{password}@{host}:{port}/{dbname}"

engine = create_engine(DATABASE_URL, echo=True)

Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@contextmanager
def session_scope():
    """Provide a transactional scope around a series of operations."""
    session = Session()
    try:
        yield session
        session.commit()
    except Exception as e:
        session.rollback()
        raise
    finally:
        session.close()