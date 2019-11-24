const { Model, DataTypes } = require('sequelize')

class Neighborhood extends Model {
  static init(sequelize) {
    super.init({
      neighborhood: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'neighborhoods'
    })
  }
}

module.exports = Neighborhood;