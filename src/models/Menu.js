const { Model, DataTypes } = require("sequelize");

class Menu extends Model {
  static init(sequelize) {
    super.init(
      {
        dateOfPublication: {
          type: DataTypes.DATEONLY,
          unique: {
            args: true,
            msg: "Já existe um cardapio cadastrado na data selecionada"
          }
        },
        description: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 255],
              msg: "A descrição ultrapassa o limite de caracteres"
            }
          }
        },
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
    });
    this.belongsToMany(models.sideDishes, {
      foreignKey: "id_menu",
      through: "menus_sideDishes",
      as: "menu_sideDishe"
    });
  }
}
module.exports = Menu;
