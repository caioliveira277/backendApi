const { Model, DataTypes } = require('sequelize')

class City extends Model {
  static init(sequelize) {
    super.init({
      city: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'cities'
    })
  }
  static associate(models) {
    this.hasOne(models.addresses, {
      foreignKey: "id_city",
      as: "cities"
    })
  }
}

module.exports = City;