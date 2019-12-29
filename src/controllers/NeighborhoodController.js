const Neighborhood = require("../models/Neighborhood");

module.exports = {
  async selectInsert(req, res) {
    try {
      const { neighborhood } = req.body;
      const neighborhoods = await Neighborhood.findOrCreate({ where: { neighborhood } });

      return res.status(200).json(neighborhoods);
    } catch (error) {
      return res.status(400).json(error.errors[0].message);
    }
  }
};
