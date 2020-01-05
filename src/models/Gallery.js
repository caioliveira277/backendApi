const { Model, DataTypes } = require("sequelize");

class Gallery extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [4, 200],
              msg: "O nome da imagem ultrapassa o limite"
            }
          }
        },
        size: DataTypes.REAL,
        key: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [4, 250],
              msg: "O nome da imagem ultrapassa o limite"
            }
          }
        },
        type: {
          type: DataTypes.ENUM,
          values: ["profile", "receipt"],
        },
        createdAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "gallery"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: "id_user",
      as: "user"
    });
  }
}
module.exports = Gallery;
