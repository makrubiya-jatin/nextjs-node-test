import { PrismaClient } from "@prisma/client";
import { mockUsers } from "../src/utils/server/mock-users";
import { Person, User } from "../src/utils/common/person";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: mockUsers[Person.PersonA] as unknown as User,
  });
  await prisma.user.create({
    data: mockUsers[Person.PersonB] as unknown as User,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  