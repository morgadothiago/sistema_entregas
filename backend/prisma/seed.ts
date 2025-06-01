import { Logger } from "@nestjs/common";
import { Balance, PrismaClient, Role, User, UserStatus } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seedvehicleTypes(prisma: PrismaClient, logger: Logger) {
  const vehicleTypes = [
    {
      type: "Bike",
      tarifaBase: 6,
      valorKMAdicional: 1,
      paradaAdicional: 2,
      ajudanteAdicional: 0,
    },
    {
      type: "Moto",
      tarifaBase: 9,
      valorKMAdicional: 1.5,
      paradaAdicional: 2.5,
      ajudanteAdicional: 30,
    },
    {
      type: "Carro",
      tarifaBase: 12,
      valorKMAdicional: 2,
      paradaAdicional: 3,
      ajudanteAdicional: 30,
    },
    {
      type: "Carretinha",
      tarifaBase: 18,
      valorKMAdicional: 2.5,
      paradaAdicional: 3.5,
      ajudanteAdicional: 30,
    },
    {
      type: "Utilitário Pequeno",
      tarifaBase: 25,
      valorKMAdicional: 3,
      paradaAdicional: 5,
      ajudanteAdicional: 25,
    },
    {
      type: "Utilitário Médio",
      tarifaBase: 35,
      valorKMAdicional: 4,
      paradaAdicional: 6,
      ajudanteAdicional: 30,
    },
    {
      type: "Utilitário Grande",
      tarifaBase: 45,
      valorKMAdicional: 5,
      paradaAdicional: 8,
      ajudanteAdicional: 35,
    },
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
    const percentage = 0.1;

    await prisma.profitMargin?.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        percentage,
      },
    });

    logger.log(`Seeded Profit: ${percentage * 100}%`);
  } catch (err) {
    logger.error(`Profit ${err}`);
  }
}

async function createAdminUser(prisma: PrismaClient, logger: Logger) {
  logger.log(`Creating admin user`);
  const salt = await bcrypt.genSalt(12);

  const hashedPassword = await bcrypt.hash("secret_admin", salt);

  const user: Partial<User> = {
    email: "admin@admin.com",
    password: hashedPassword,
    role: Role.ADMIN,
    status: UserStatus.ACTIVE,
    information: "admin criado com seed",
    id: 1,
  };

  const balance: Partial<Balance> = {
    id: 1,
    amount: 0,
  };

  try {
    await prisma.user?.upsert({
      where: { id: 1 },
      update: {},
      create: {
        email: user.email as string,
        password: user.password as string,
        role: user.role,
        status: user.status,
        information: user.information,
        Balance: {
          create: {
            amount: balance.amount,
          },
        },
      },
    });

    logger.log(`Admin user created successfully`);
  } catch (error) {
    logger.error(
      `Failed to create admin user: ${(error as Record<string, any>).message}`,
    );
  }
}
async function main() {
  await prisma.$connect();

  const logger = new Logger("SEED");

  await seedProfit(prisma, logger);
  await seedvehicleTypes(prisma, logger);
  await createAdminUser(prisma, logger);
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
