# Docker Node App

This repository demonstates how a node application can be dockerized, then pushed to [Docker Hub](https://hub.docker.com/).

Generated docker image is used to on [terraform_docker_demo](https://github.com/kdblitz/terraform_docker_demo), which illustrates complete IaaS setup, ending with launching the container created from this repository.

Content is served on port `3000`.

## Run examples

Run with a defaults:
```
docker run -d --rm -p 3000:3000 kdblitz/docker_node_app:latest
```

Run with a different extra message:
```
docker run -d --rm -e EXTRA_MESSAGE="my new message" -p 3000:3000 kdblitz/docker_node_app:latest
```

## Environment Variable

`EXTRA_MESSAGE` is a configurable value when launching the image. Default value is "default extra message", but may be overridden when running the container.
