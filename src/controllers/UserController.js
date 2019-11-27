const User = require('../models/User');
const sequelize = require('sequelize');

module.exports = {
    async insert(req, res)  {
        const { name, email, password, id_address, username } = req.body;
        const userInsert = await User.create({
            name,
            email,
            password,
            id_address,
            username,
            createdAt: sequelize.fn('NOW'),
            updatedAt: sequelize.fn('NOW')
        });

        return res.json(userInsert);
    },
    
    async selectAll(req, res) {
        const userAll = await User.findAll({
            attributes: ["id","name","email","createdAt","updatedAt","isActive","id_address"]
        });

        return res.json(userAll)
    },
    async select(req, res) {
        const userSelect = await User.findByPk(req.params.id, {
            attributes: ["name","email","createdAt","updatedAt","isActive","id_address"],
            include: [
                {
                    association: 'address', include: [
                        { association: 'cities' },
                        { association: 'neighborhoods' },
                        { association: 'states' }
                    ],
                    attributes: ["zipcode","number","street","complement","updatedAt"]
                }
            ]
        });

        return res.json(userSelect)
    },

    async update(req, res) {
        const { name, email, password, username, id_address } = req.body;
        await User.update(
            { name, email, password, username, id_address, updatedAt: sequelize.fn('NOW') },
            { where: { id: req.params.id }
        })

        return res.json(true);
    },

    async delete(req, res) {
        await User.update(
            { isActive: false, updatedAt: sequelize.fn('NOW') },
            { where: { id: req.params.id }
        });
        return res.json(true);
    },

}
