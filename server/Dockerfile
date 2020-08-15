FROM keymetrics/pm2:12-slim

WORKDIR /srv/app

# Install app dependencies and cache
COPY package.json .
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install 

COPY . .

RUN npm build

ENV PORT 80

CMD [ "pm2-runtime", "start", "pm2.json" ]
