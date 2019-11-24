const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.CHAR,
      id_address: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN,
    }, {
      sequelize,
      modelName: 'users'
    })
  }
}

module.exports = User;