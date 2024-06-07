import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Person } from "@/utils/common/person";
import {
  createUser,
  deleteUserByName,
  getAllUsers,
  getUserByName,
  updateUserByName,
} from "@/utils/server/user";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getPerson: NextApiHandler = async (req, res) => {
  const person = req.query.person as Person;
  try {
    let user;
    if (!person) {
      user = await getAllUsers();
    } else {
      switch (person) {
        case Person.PersonA:
          await sleep(1000);
          break;
        case Person.PersonB:
          await sleep(3000);
          break;
        case Person.PersonC:
          res.status(500).send("Error: Request failed for Person C");
          return;
        default:
          res.status(404).send("Error: Person not found");
          return;
      }

      user = await getUserByName(person);
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

const deletePerson: NextApiHandler = async (req, res) => {
  const person = req.query.person as Person;

  if (!person) {
    res.status(500).send("Error: User Name is required");
    res.end();
    return;
  }

  try {
    await deleteUserByName(person);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const addPerson: NextApiHandler = async (req, res) => {
  const newData = req.body;

  try {
    await createUser(newData);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const updatePerson: NextApiHandler = async (req, res) => {
  const person = req.query.person as Person;
  const newData = req.body;

  if (!person) {
    res.status(500).send("Error: User Name is required");
    res.end();
    return;
  }

  try {
    await updateUserByName(person, newData);
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
      return getPerson(req, res);

    case "POST":
      return addPerson(req, res);

    case "PUT":
      return updatePerson(req, res);

    case "DELETE":
      return deletePerson(req, res);

    default:
      res.status(404).send({
        user: null,
      });
  }
};
export default handler;