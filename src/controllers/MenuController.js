const Menu = require("../models/Menu");
const Mixture = require("../models/Mixture");
const SideDishe = require("../models/SideDishe");

module.exports = {
  async insert(req, res) {
    try {
      const {
        dateOfPublication,
        description,
        id_mixtures,
        id_sideDishes
      } = req.body;
      menuInsert = await Menu.create({
        dateOfPublication,
        description
      });

      if (id_mixtures.length) {
        for (var data in id_mixtures) {
          var mixtures = await Mixture.findByPk(id_mixtures[data]);
          await menuInsert.addMenu_mixture(mixtures);
        }
      }

      if (id_sideDishes.length) {
        for (let data in id_sideDishes) {
          var sideDishes = await SideDishe.findByPk(id_sideDishes[data]);
          await menuInsert.addMenu_sideDishe(sideDishes);
        }
      }

      return res.status(200).json(menuInsert);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async menu_mixture(req, res) {
    try {
      const id_menu = req.params.id;
      const { id_mixture } = req.body;
      const menu = await Menu.findByPk(id_menu);

      for (let data in id_mixture) {
        var mixtures = await Mixture.findByPk(id_mixture[data]);
        await menu.addMenu_mixture(mixtures);
      }

      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async menu_sideDishe(req, res) {
    try {
      const id_menu = req.params.id;
      const { id_sideDishe } = req.body;
      const menu = await Menu.findByPk(id_menu);

      for (let data in id_sideDishe) {
        var sideDishes = await SideDishe.findByPk(id_sideDishe[data]);
        await menu.addMenu_sideDishe(sideDishes);
      }

      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async select(req, res) {
    try {
      const id = req.params.id;
      selectMenu = await Menu.findByPk(id, {
        include: [
          {
            association: "menu_mixture",
            attributes: ["id", "name", "ingredients"],
            through: { attributes: [] }
          },
          {
            association: "menu_sideDishe",
            attributes: ["id", "name", "ingredients"],
            through: { attributes: [] }
          }
        ]
      });
      return res.status(200).json(selectMenu);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async selectAll(req, res) {
    try {
      const { weekly } = req.query;
      var where = {};
      // if (weekly) where = { id: 8 };

      menuAll = await Menu.findAll({
        include: [
          {
            association: "menu_mixture",
            attributes: ["id", "name", "ingredients"],
            through: { attributes: [] }
          },
          {
            association: "menu_sideDishe",
            attributes: ["id", "name", "ingredients"],
            through: { attributes: [] }
          }
        ],
        where: where
      });
      return res.status(200).json(menuAll);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async deleteMixture(req, res) {
    try {
      const id_menu = req.params.id;
      const { id_mixture } = req.body;
      const menu = await Menu.findByPk(id_menu);

      const mixture = await Mixture.findByPk(id_mixture);
      menu.removeMenu_mixture(mixture);

      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  async deleteSideDishe(req, res) {
    try {
      const id_menu = req.params.id;
      const { id_sideDishe } = req.body;
      const menu = await Menu.findByPk(id_menu);

      const sideDishe = await SideDishe.findByPk(id_sideDishe);
      menu.removeMenu_sideDishe(sideDishe);

      return res.status(200).json(true);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};
