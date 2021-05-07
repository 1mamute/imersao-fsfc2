# Imersão Full Cycle 2 - Desafio 3

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

## Sobre o repositório

Criar deploys e services para kubernetes da aplicação escrita no desafio-2.

## Script de conveniência

- Certifique-se que você tem o kind e o helm instalado em sua máquina
- Execute o script run.sh

```
chmod +x run.sh
./run.sh
```

- Aguarde tudo estar ready e acesse sua aplicação em http://localhost:8080

## Utilizando KIND

- Instale o docker: https://docs.docker.com/get-docker/

- Instale o kubectl: https://kubernetes.io/docs/tasks/tools/

- Instale o kind: https://kind.sigs.k8s.io/docs/user/quick-start/

- Crie um cluster do kind e aponte o kubectl para o cluster

```
kind create cluster
kubectl cluster-info --context kind-kind
```

- **Certifique que você se encontra na pasta desafio-3 do repositório para continuar com os comandos abaixo!**

- Aplique os deployments/load balancers

```
kubectl apply -f ./k8s/mongodb/deploy.yml &&
kubectl apply -f ./k8s/frontend/deploy.yml &&
kubectl apply -f ./k8s/routes-api/deploy.yml &&
```

- Exponha o load balancer do front-end

```
watch kubectl port-forward services/frontend-service 8080:3000
```

- O mongodb demora um pouco para subir, aguarde tudo estar ready e acesse sua aplicação em http://localhost:8080
