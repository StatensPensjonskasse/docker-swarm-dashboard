# docker-swarm-dashboard
Dashboard for Docker Swarm Cluster

Docker-Image Size: < 25 MB

_Use a stable release in production, not the master-build!
Don't expose this service to the world! The endpoints offer the configuration of your services._

If you like this projekt, please give a ⭐ on github.
Feedback would be nice.

----
## Pull Image from ghcr.io
```
docker pull ghcr.io/heckenmann/docker-swarm-dashboard:master
```

----
## Local Build
```
docker build -t ghcr.io/heckenmann/docker-swarm-dashboard:local .
```

----
## docker-compose.yml
```
---
version: '3.5'

services:
  docker-swarm-dashboard:
    image: ghcr.io/heckenmann/docker-swarm-dashboard:master
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    ports:
      - "8080:8080"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
    environment:
      DOCKER_API_VERSION: 1.35
```

----
## Deploy on docker-swarm
From the directory with docker-compose.yml run:
```
docker stack deploy --compose-file docker-compose.yml docker-swarm-dashboard
```

----
## logs-generator (for testing)
```
docker service create --name logger chentex/random-logger:latest 50 200
```

----
## Screenshots (outdated!)

![Container Dashboard](screenshots/container.png)
![Tasks Timeline](screenshots/tasks.png)
