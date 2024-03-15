## :rocket: PeakVisor Trails Platform
<br>



## Tech Stack
- Angular w/ TypeScript
- NodeJS w/ TypeScript
- Express
- Nginx
- Docker & Docker-compose
<br>



## Containers
- The Frontend, Backend, Nginx Reverse Proxy and Database are seperated into modular Docker containers that contain all dependencies needed to run.
- No manual installation is needed when migrating code into new servers

#### Frontend Web Server
- Served by Nginx
- Angular w/ TypeScript
- Bootstrap

#### Backend 
- NodeJS w/ TypeScript
- Express

#### Nginx Reverse Proxy
- Proxies HTTP requests to websites to the containers 
<br>



## Services

#### StravaAPI
- OAuth


client_id = 121252
client_secret = 8f93131a001ea159bdeb7d2201e938d51ffb7bc2


https://www.strava.com/oauth/authorize?client_id=${client_ID}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read

https://www.strava.com/oauth/authorize?client_id= 121252&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read



http://localhost/exchange_token?state=&code=75a917dd00d2f1cb9ba3265320e423542591d122&scope=read




www.strava.com/oauth/token?client_id=CLIENTID&client_secret=CLIENTSECRET&code=AUTHORIZATIONCODE&grant_type=authorization_code

www.strava.com/oauth/token?client_id=121252&client_secret=8f93131a001ea159bdeb7d2201e938d51ffb7bc2&code=d0bab654bce1367cbcf0f5e4b7ddadb94fa36ee9&grant_type=authorization_code