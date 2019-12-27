const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.CHAR,
      cellPhone: DataTypes.STRING,
      telephone:DataTypes.STRING,
      dateOfBirth: DataTypes.DATEONLY,
      cpf: DataTypes.CHAR,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN,
    }, {
      hooks: {
        beforeValidate: async (user) => {
          if(user.password){
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
          }
        }
      },
      sequelize,
      modelName: "users"
    })
  }

  static associate(models) {
      this.belongsTo(models.addresses, {
        foreignKey: "id_address",
        as: "address"
      })
  }
}
module.exports = User;