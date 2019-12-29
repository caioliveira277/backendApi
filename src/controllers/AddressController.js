const Address = require("../models/Address");
const sequelize = require("sequelize");

module.exports = {
  async insert(req, res) {
    try {
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

      return res.status(200).json(addressesInsert);
    } catch (error) {
      res.status(400).send(error.errors[0].message);
    }
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
    try {
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

      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.errors[0].message);
    }
  }
};
