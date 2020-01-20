const SideDishe = require("../models/SideDishe");
const sequelize = require("sequelize");

module.exports = {
  async insert(req, res) {
    try {
      const { name, ingredients } = req.body;
      sideDisheInsert = await SideDishe.create({
        name,
        ingredients,
        createdAt: sequelize.fn("NOW"),
        updatedAt: sequelize.fn("NOW")
      });
      return res.status(200).json(sideDisheInsert);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async selectAll(req, res) {
    try {
      sideDisheSelectAll = await SideDishe.findAll({
        attributes: [["name", "label"], "id", "ingredients"]
      });
      return res.status(200).json(sideDisheSelectAll);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async update(req, res) {
    try {
      const id = req.params.id;
      const { name, ingredients } = req.body;

      await SideDishe.update(
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
