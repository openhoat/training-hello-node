# Hello node

## Présentation

Voir le slideshow de ce hands-on : [Training Docker](https://docs.google.com/presentation/d/1A4rlevikNsYDhvkTbsBHLzdaFqyrhqcBvWn3IrC19LA)

## Objectifs

- Faire une application web minimale qui retourne `{ hello: 'world!' }`

## Consignes / aide

- Utiliser le module http de nodejs
- Coder l'application
- Construire le conteneur de l'app :

  ```
  $ docker build -t openhoat/hello-node .
  ```

- Démarrer l'app :

  ```
  $ docker run --name hello-node --rm -p 3000:3000 openhoat/hello-node
  ```
