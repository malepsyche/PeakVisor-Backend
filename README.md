## :rocket: PeakVisor Trails Platform
<br>



## Tech Stack
- Angular w/ TypeScript
- Bootstrap
- NodeJS w/ TypeScript
- Webpack
- Express
- Nginx
- Docker & Docker-compose
- Mongodb
<br>



## Containers
- The Frontend, Backend, Nginx Reverse Proxy and Database are seperated into modular Docker containers that contain all dependencies needed to run.
- No manual installation is needed when migrating code into new servers

#### Frontend Container
- Served by Nginx Web Server
- Angular w/ TypeScript
- Bootstrap

#### Backend Container
- NodeJS w/ TypeScript
- Express

#### Nginx Reverse Proxy Container
- Proxies HTTP requests to websites to the containers 
<br>



## Services

#### StravaAPI
- OAuth
- Callback


