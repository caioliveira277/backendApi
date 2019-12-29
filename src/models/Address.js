const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: {
          type: DataTypes.CHAR,
          validate: {
            len: {
              args: [8, 8],
              msg: "CEP com formato inválido"
            }
          }
        },
        number: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [0, 20],
              msg: "O campo número aceita no máximo 20 caracteres"
            },
            isInt: {
              msg: "Número do endereço com formato inválido"
            }
          }
        },
        street: {
          type: DataTypes.STRING,
          len: {
            args: [0, 255],
            msg: "O tamanho máximo do campo 'Rua', foi excedido"
          }
        },
        complement: {
          type: DataTypes.STRING,
          len: [0, 255],
          msg: "O tamanho máximo do campo 'Complemento', foi excedido"
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      {
        sequelize,
        modelName: "addresses"
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.cities, {
      foreignKey: "id_city",
      as: "cities"
    });
    this.belongsTo(models.neighborhoods, {
      foreignKey: "id_neighborhood",
      as: "neighborhoods"
    });
    this.belongsTo(models.states, {
      foreignKey: "id_state",
      as: "states"
    });
    this.hasOne(models.users, {
      foreignKey: "id_address",
      as: "address"
    });
  }
}

module.exports = Address;
