import prisma from '../db-config/prismaClient';

interface CompanyInput {
  name: string;
}

export async function createCompany(data: CompanyInput) {
  try {
    const company = await prisma.company.create({ data });
    return company;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
}

export async function getAllCompanies() {
  try {
    const companies = await prisma.company.findMany();
    return companies;
  } catch (error) {
    console.error("Error fetching all companies:", error);
    throw error;
  }
}

export async function getCompanyById(companyId: number) {
  try {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });
    return company;
  } catch (error) {
    console.error("Error fetching company by ID:", error);
    throw error;
  }
}

export async function updateCompanyById(companyId: number, data: CompanyInput) {
  try {
    const company = await prisma.company.update({
      where: { id: companyId },
      data,
    });
    return company;
  } catch (error) {
    console.error("Error updating company:", error);
    throw error;
  }
}

export async function deleteCompanyById(companyId: number) {
  try {
    await prisma.company.delete({
      where: { id: companyId },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting company:", error);
    throw error;
  }
}