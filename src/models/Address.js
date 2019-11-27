const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.CHAR,
      number: DataTypes.CHAR,
      street: DataTypes.STRING,
      complement: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: "addresses"
    })
  }
  static associate(models) {
    this.belongsTo(models.cities, {
      foreignKey: "id_city",
      as: "cities"
    })
    this.belongsTo(models.neighborhoods, {
      foreignKey: "id_neighborhood",
      as: "neighborhoods"
    })
    this.belongsTo(models.states, {
      foreignKey: "id_state",
      as: "states"
    })
    this.hasOne(models.users, {
      foreignKey: "id_address",
      as: "address"
    })
  }
}

module.exports = Address;