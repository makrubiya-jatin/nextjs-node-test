import { Person } from "@/utils/common/person";
import prisma from "../db-config/prismaClient";

export const getPersonFromDB = async (person: Person) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name: person,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};