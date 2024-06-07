import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import {
  createCompany,
  deleteCompanyById,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
} from "@/utils/server/company";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getCompany: NextApiHandler = async (req, res) => {
  const company = parseInt((req?.query?.company as string) || "0");
  try {
    let user;
    if (!company) {
      user = await getAllCompanies();
    } else {
      user = await getCompanyById(company);
    }

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(500).send("Error: Request failed");
    }
  } catch (error) {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const deleteCompany: NextApiHandler = async (req, res) => {
  const company = parseInt((req?.query?.company as string) || "0");

  if (!company) {
    res.status(500).send("Error: User Name is required");
    res.end();
    return;
  }

  try {
    await deleteCompanyById(company);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const addCompany: NextApiHandler = async (req, res) => {
  const newData = req.body;

  try {
    await createCompany(newData);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const updateCompany: NextApiHandler = async (req, res) => {
  const company = parseInt((req?.query?.company as string) || "0");
  const newData = req.body;

  if (!company) {
    res.status(500).send("Error: User Name is required");
    res.end();
    return;
  }

  try {
    await updateCompanyById(company, newData);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getCompany(req, res);

    case "POST":
      return addCompany(req, res);

    case "PUT":
      return updateCompany(req, res);

    case "DELETE":
      return deleteCompany(req, res);

    default:
      res.status(404).send({
        user: null,
      });
  }
};
export default handler;