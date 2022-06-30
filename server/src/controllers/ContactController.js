const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ContactController {
  static getAll = async (req, res) => {
    const allContact = await prisma.user.findMany();
    res.status(200).json({
      status: "success",
      message: allContact,
    });
  };

  static add = async (req, res) => {
    await prisma.user.create({
      data: {
        ...req.body,
      },
    });

    res.status(201).json({
      status: "success",
      message: "User created",
    });
  };
}

module.exports = ContactController;
