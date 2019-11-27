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
  static associate(models) {
    this.hasOne(models.addresses, {
      foreignKey: "id_state",
      as: "states"
    })
  }
}

module.exports = State;