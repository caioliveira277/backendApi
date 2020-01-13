const { Model, DataTypes } = require("sequelize");

class Menu extends Model {
  static init(sequelize) {
    super.init(
      {
        dateOfPublication: DataTypes.DATEONLY
      },
      {
        sequelize,
        modelName: "menus"
      }
    );
  }

  static associate(models) {
   this.belongsToMany(models.mixtures, {
     foreignKey: "id_menu",
     through: "menus_mixtures",
     as: "menu_mixture"
   })
   this.belongsToMany(models.sideDishes, {
     foreignKey: "id_menu",
     through: "menus_sideDishes",
     as: "menu_sideDishe"
   })
  }
}
module.exports = Menu;
