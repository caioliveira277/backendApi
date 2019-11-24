const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: 'CHAR(8)',
      number: 'CHAR(15)',
      street: DataTypes.STRING,
      complement: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'addresses'
    })
  }
  static associate(models) {
    this.belongsTo(models.cities, { 
      foreignKey: "id_city",
      as: "city" 
    })
    this.belongsTo(models.neighborhoods, { 
      foreignKey: "id_neighborhood",
      as: "neighborhood" 
    })
    this.belongsTo(models.states, { 
      foreignKey: "id_state",
      as: "state" 
    })
  }
}

module.exports = Address;