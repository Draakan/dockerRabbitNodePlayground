#!/bin/sh
docker network create rabbit-network

cd ./rabbitmq
docker-compose up --build -d;
cd ..

docker-compose up --build;