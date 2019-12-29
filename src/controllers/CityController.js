const City = require("../models/City");

module.exports = {
  async selectInsert(req, res) {
    try {
      const { city } = req.body;
      const cities = await City.findOrCreate({ where: { city } });

      return res.status(200).json(cities);
    } catch (error) {
      return res.status(400).json(error.errors[0].message);
    }
  }
};
