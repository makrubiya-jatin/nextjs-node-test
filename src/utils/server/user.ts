import { User } from '../common/person';
import prisma from '../db-config/prismaClient';

export async function createUser(user: User): Promise<User> {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
}

export async function getAllUsers(): Promise<User[]> {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error(`Error fetching all users: ${error}`);
  }
}

export async function getUserByName(name: string): Promise<User | null> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        name,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Error fetching user by name: ${error}`);
  }
}

export async function updateUserByName(name: string, newData: Partial<User>): Promise<Array<User>> {
  try {
    const updatedUser = await prisma.user.updateMany({
      where: {
        name,
      },
      data: newData,
    });
    return updatedUser as unknown as User[];
  } catch (error) {
    throw new Error(`Error updating user: ${error}`);
  }
}

export async function deleteUserByName(name: string): Promise<void> {
  try {
    await prisma.user.deleteMany({
      where: {
        name,
      },
    });
  } catch (error) {
    throw new Error(`Error deleting user: ${error}`);
  }
}