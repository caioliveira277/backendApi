const { Model, DataTypes } = require("sequelize");

class Mixture extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 255],
              msg:
                "O nome da mistura ultrapassa o limite de caracteres, informe um nome menor ou abreviado"
            }
          }
        },
        ingredients: DataTypes.TEXT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      {
        sequelize,
        modelName: "mixtures"
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.menus, {
      foreignKey: "id_mixture",
      through: "menus_mixtures",
      as: "mixture"
    })
  }
}
module.exports = Mixture;
