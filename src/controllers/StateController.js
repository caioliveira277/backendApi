const State = require("../models/State");

module.exports = {
  async selectInsert(req, res) {
    try {
      const { state } = req.body;
      const states = await State.findOrCreate({ where: { state } });

      return res.status(200).json(states);
    } catch (error) {
      return res.status(400).json(error.errors[0].message);
    }
  }
};
