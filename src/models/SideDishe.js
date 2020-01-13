const { Model, DataTypes } = require("sequelize");

class SideDishe extends Model {
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
        modelName: "sideDishes"
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.menus, {
      foreignKey: "id_sideDishe",
      through: "menus_sideDishes",
      as: "sideDishe"
    })
  }
}
module.exports = SideDishe;
