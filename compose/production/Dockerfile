FROM node:16-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json /app/
RUN npm install --silent

COPY . /app
RUN npm run build

# production environment
FROM steebchen/nginx-spa
WORKDIR /app
COPY --from=build /app/dist ./
EXPOSE 80
CMD ["nginx"]
