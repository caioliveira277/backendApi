const { Model, DataTypes } = require('sequelize')

class State extends Model {
  static init(sequelize) {
    super.init({
      state: DataTypes.STRING,
      initials: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'states'
    })
  }
}

module.exports = State;