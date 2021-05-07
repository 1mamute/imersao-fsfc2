# Imersão Full Cycle 2 - Desafio 1

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Fazer uma imagem que suba um webserver em GO na porta 8000 e fazer o push dessa imagem no Dockerhub.

## Subir o container pelo dockerhub

`docker run --rm -p 8000:8000 1mamute/go-webserver`

## Subir o container localmente

#### Builde a imagem

`docker build . -t go-webserver`

#### Suba o container

`docker run --rm --name go-webserver -p 8000:8000 go-webserver:latest`

## Prévia

![image](https://user-images.githubusercontent.com/22196761/113984771-d633e500-9821-11eb-967c-1a192951065b.png)
