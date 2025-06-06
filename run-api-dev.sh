
cd backend/DOCKER

docker compose up -d

cd ..

yarn

yarn prisma db push

yarn seed

yarn start:dev api