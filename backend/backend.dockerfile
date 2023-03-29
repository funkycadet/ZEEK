FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8
# FROM python:3.10.6-slim

WORKDIR /app/

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | POETRY_HOME=/opt/poetry python3 && \
    cd /usr/local/bin && \
    ln -s /opt/poetry/bin/poetry && \
    poetry config virtualenvs.create false

# Copy poetry.lock* in case it doesn't exist in the repo
COPY ./app/pyproject.toml ./app/poetry.lock* /app/

COPY ./app/prestart.sh ./app/

RUN chmod +x ./app/prestart.sh

# Allow installing dev dependencies to run tests
ARG INSTALL_DEV=false
RUN bash -c "if [ $INSTALL_DEV == 'true' ] ; then poetry install --no-root ; else poetry install --no-root --no-dev ; fi"

COPY ./app /app

# RUN ./app/prestart.sh

ENV PYTHONPATH=/app
