const City = require('../models/City');

module.exports = {
    async insert(req, res) {
        const { city } = req.body;
        const citiesInsert = await City.create({city});

        return res.json(citiesInsert);
    },

    async selectAll(req, res) {
        const citiesAll = await City.findAll();

        return res.json(citiesAll)
    },
    async select(req, res) {
        const cities = await City.findByPk(req.params.id);

        return res.json(cities)
    },

}