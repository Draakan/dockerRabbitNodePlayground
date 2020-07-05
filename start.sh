#!/bin/sh

cd ./rabbitmq
docker-compose up --build -d;
cd ..

docker-compose up --build;