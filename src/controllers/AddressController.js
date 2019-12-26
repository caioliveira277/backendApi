const Address = require("../models/Address");
const sequelize = require("sequelize");

module.exports = {
  async insert(req, res) {
    const {
      id_city,
      id_neighborhood,
      id_state,
      zipcode,
      number,
      street,
      complement
    } = req.body;
    const addressesInsert = await Address.create({
      id_city,
      id_neighborhood,
      id_state,
      zipcode,
      number,
      street,
      complement,
      createdAt: sequelize.fn("NOW"),
      updatedAt: sequelize.fn("NOW")
    });

    return res.json(addressesInsert);
  },

  async selectAll(req, res) {
    const addressesAll = await Address.findAll();

    return res.json(addressesAll);
  },
  async select(req, res) {
    const addresses = await Address.findByPk(req.params.id, {
      attributes: ["zipcode", "number", "street", "complement", "updatedAt"],
      include: [
        { association: "cities" },
        { association: "states" },
        { association: "neighborhoods" }
      ]
    });

    return res.json(addresses);
  },

  async update(req, res) {
    const {
      id_city,
      id_neighborhood,
      id_state,
      zipcode,
      number,
      street,
      complement
    } = req.body;
    await Address.update(
      {
        id_city,
        id_neighborhood,
        id_state,
        zipcode,
        number,
        street,
        complement,
        updatedAt: sequelize.fn("NOW")
      },
      { where: { id: req.params.id } }
    );

    return res.json(true);
  }
};
