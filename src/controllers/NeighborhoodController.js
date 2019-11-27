const Neighborhood = require('../models/Neighborhood');

module.exports = {
    async insert(req, res) {
        const { neighborhood } = req.body;
        const neighborhoodsInsert = await Neighborhood.create({neighborhood});

        return res.json(neighborhoodsInsert);
    },

    async selectAll(req, res) {
        const neighborhoodAll = await Neighborhood.findAll();

        return res.json(neighborhoodAll)
    },
    async select(req, res) {
        const neighborhoods = await Neighborhood.findByPk(req.params.id);

        return res.json(neighborhoods)
    },

}