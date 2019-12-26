const State = require("../models/State");

module.exports = {
  async insert(req, res) {
    const { state, initials } = req.body;
    console.log(state);

    const statesInsert = await State.create({ state, initials });

    return res.json(statesInsert);
  },

  async selectAll(req, res) {
    const statesAll = await State.findAll();

    return res.json(statesAll);
  },
  async select(req, res) {
    const states = await State.findByPk(req.params.id);

    return res.json(states);
  }
};
