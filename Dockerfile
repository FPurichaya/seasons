FROM node:alpine

RUN mkdir -p /app/seasons
WORKDIR /app/seasons

COPY package.json .
RUN yarn install

COPY src/ ./src
COPY public/ /app/seasons/public
COPY test/test.txt .
COPY .env .

EXPOSE 3006
CMD ["yarn", "start"]

