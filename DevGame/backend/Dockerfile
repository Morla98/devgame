FROM python:3.11.2-bullseye

RUN apt-get update & apt-get upgrade -y
COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt
WORKDIR /devgame_django
ADD ./devgame_django .