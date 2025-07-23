
cd backend/DOCKER

docker-compose up -d

yarn

yarn prisma db push

yarn seed

yarn start:dev api
