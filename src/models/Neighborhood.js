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
  static associate(models) {
    this.hasOne(models.addresses, {
      foreignKey: "id_neighborhood",
      as: "neighborhoods"
    })
  }
}

module.exports = Neighborhood;