#!/bin/bash
set -euxo pipefail ;\
kind create cluster ;\
kubectl cluster-info --context kind-kind
kubectl apply -f ./k8s/mongodb/deploy.yml ;\
kubectl apply -f ./k8s/frontend/deploy.yml ;\
kubectl apply -f ./k8s/routes-api/deploy.yml ;\
until kubectl port-forward services/frontend-service 8080:3000; do
    sleep 5
done