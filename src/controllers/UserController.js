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
        "name",
        "username",
        "email",
        "createdAt",
        "updatedAt",
        "cpf",
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
        }
      ]
    });

    return res.json(userSelect);
  },

  async update(req, res) {
    const {
      name,
      email,
      password,
      username,
      id_address,
      cpf,
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
        cellPhone,
        telephone,
        dateOfBirth,
        isActive,
        id_address,
        updatedAt: sequelize.fn("NOW")
      },
      { where: { id: req.params.id } }
    );

    return res.json(true);
  },

  async delete(req, res) {
    await User.update(
      { isActive: false, updatedAt: sequelize.fn("NOW") },
      { where: { id: req.params.id } }
    );
    return res.json(true);
  }
};
