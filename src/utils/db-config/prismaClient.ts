import { PrismaClient } from '@prisma/client';

interface CustomGlobal extends Global {
  prisma?: PrismaClient;
}

declare const global: CustomGlobal;

// Add a check to see if the PrismaClient has already been created
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;