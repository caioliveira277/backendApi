const Mixture = require("../models/Mixture");
const sequelize = require("sequelize");

module.exports = {
  async insert(req, res) {
    try {
      const { name, ingredients } = req.body;
      mixtureInsert = await Mixture.create({
        name,
        ingredients,
        createdAt: sequelize.fn("NOW"),
        updatedAt: sequelize.fn("NOW")
      });
      return res.status(200).json(mixtureInsert);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async selectAll(req, res) {
    try {
      mixtureSelectAll = await Mixture.findAll();
      return res.status(200).json(mixtureSelectAll);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async update(req, res) {
    try {
      const id = req.params.id;
      const { name, ingredients } = req.body;

      await Mixture.update(
        {
          name,
          ingredients,
          updatedAt: sequelize.fn("NOW")
        },
        { where: { id } }
      );
      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};
