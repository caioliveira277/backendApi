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
}

module.exports = City;