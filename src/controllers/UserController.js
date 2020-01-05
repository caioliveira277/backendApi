const User = require("../models/User");
const sequelize = require("sequelize");

module.exports = {
  async insert(req, res) {
    const {
      name,
      email,
      password,
      id_address,
      username,
      cpf,
      type,
      dateOfBirth,
      cellPhone,
      telephone
    } = req.body;
    const userInsert = await User.create({
      name,
      email,
      password,
      id_address,
      username,
      cpf,
      type,
      dateOfBirth,
      cellPhone,
      telephone,
      createdAt: sequelize.fn("NOW"),
      updatedAt: sequelize.fn("NOW")
    });

    return res.json(userInsert);
  },

  async selectAll(req, res) {
    const userAll = await User.findAll({
      attributes: [
        "id",
        "name",
        "email",
        "createdAt",
        "updatedAt",
        "cpf",
        "type",
        "dateOfBirth",
        "cellPhone",
        "telephone",
        "isActive",
        "id_address"
      ]
    });

    return res.json(userAll);
  },
  async select(req, res) {
    let id = req.params.id;
    if (id === "true") {
      id = req.id;
    }
    const userSelect = await User.findByPk(id, {
      attributes: [
        "id",
        "name",
        "username",
        "email",
        "createdAt",
        "updatedAt",
        "cpf",
        "type",
        "cellPhone",
        "telephone",
        "dateOfBirth",
        "createdAt",
        "updatedAt",
        "isActive",
        "id_address"
      ],
      include: [
        {
          association: "address",
          include: [
            { association: "cities" },
            { association: "neighborhoods" },
            { association: "states" }
          ],
          attributes: ["zipcode", "number", "street", "complement", "updatedAt"]
        },
        {
          association: "gallery",
          attributes: ["id","key"],
          where: {type: "profile"},
          required: false
        }
      ]
    });

    return res.json(userSelect);
  },

  async update(req, res) {
    try {
      let id = req.params.id;
      if (id === "true") id = req.id;
      const {
        name,
        email,
        password,
        username,
        id_address,
        cpf,
        type,
        cellPhone,
        telephone,
        dateOfBirth,
        isActive
      } = req.body;
      await User.update(
        {
          name,
          email,
          password,
          username,
          cpf,
          type,
          cellPhone,
          telephone,
          dateOfBirth,
          isActive,
          id_address,
          updatedAt: sequelize.fn("NOW")
        },
        { where: { id } }
      );
      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.errors[0].message);
    }
  },

  async delete(req, res) {
    await User.update(
      { isActive: false, updatedAt: sequelize.fn("NOW") },
      { where: { id: req.params.id } }
    );
    return res.json(true);
  }
};
