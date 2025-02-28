import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function createAdmin() {
  const hashedPassword = await bcrypt.hash("Sanjayya07#", 10);

  const admin = await prisma.user.upsert({
    where: { username: "bimas" },
    update: {},
    create: {
      username: "bimas",
      password: hashedPassword,
    },
  });

  console.log("Admin created:", admin);
}

createAdmin().finally(() => prisma.$disconnect());
