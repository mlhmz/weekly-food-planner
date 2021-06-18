FROM node:latest as build-stage
WORKDIR /app
COPY package.json ./
COPY src/* /app/dist/
RUN npm install

FROM node:latest as production-stage
WORKDIR /app
COPY --from=build-stage /app /app

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

