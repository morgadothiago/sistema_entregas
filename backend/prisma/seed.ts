import { Logger } from "@nestjs/common";
import { PrismaClient } from "./../generated/prisma";

const prisma = new PrismaClient();

async function seedvehicleTypes(prisma: PrismaClient, logger: Logger) {
  const vehicleTypes = [
    { type: "Car", pricePerKm: 1.5 },
    { type: "Motorcycle", pricePerKm: 1.0 },
    { type: "Truck", pricePerKm: 2.5 },
    { type: "Bus", pricePerKm: 2.0 },
    { type: "Bicycle", pricePerKm: 0.5 },
  ];

  logger.log(`Seeding vehicle types`);

  for (const vehicleType of vehicleTypes) {
    try {
      await prisma.vehicleType?.upsert({
        where: { type: vehicleType.type },
        update: {},
        create: vehicleType,
      });

      logger.log(`Seeded vehicle type: ${vehicleType.type}`);
    } catch {
      logger.error(`${vehicleType.type}`);
    }
  }

  logger.log("Vehicle types seeded successfully!");
}

async function seedProfit(prisma: PrismaClient, logger: Logger) {
  logger.log(`Seeding Profit`);
  try {
    await prisma.profitMargin?.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        percentage: 10.0,
      },
    });

    logger.log(`Seeded Profit: ${10.0}`);
  } catch {
    logger.error(`Profit`);
  }
}

async function main() {
  await prisma.$connect();

  const logger = new Logger("SEED");

  await seedProfit(prisma, logger);
  await seedvehicleTypes(prisma, logger);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
