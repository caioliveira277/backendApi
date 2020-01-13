const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [4, 255],
              msg: "Informe somente o seu nome e sobrenome"
            }
          }
        },
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: {
              msg: "Email com formato inválido"
            }
          },
          unique: {
            args: true,
            msg: "O email informado já está em uso, informe outro"
          }
        },
        username: {
          type: DataTypes.STRING,
          validate: {
            len: {
              args: [5, 50],
              msg: "Informe o seu nome de usuário contendo de 5 a 50 caracteres"
            }
          },
          unique: {
            args: true,
            msg: "O nome de usuário já está em uso, informe outro"
          }
        },
        password: {
          type: DataTypes.CHAR,
          validate: {
            len: {
              args: [5, 60],
              msg: "Sua senha precisa conter de 5 a 50 caracteres"
            }
          }
        },
        cpf: {
          type: DataTypes.CHAR,
          validate: {
            len: {
              args: [11, 11],
              msg: "CPF com formato inválido"
            }
          },
           unique: {
            args: true,
            msg: "CPF já cadastrado!"
          }
        },
        type: {
          type: DataTypes.ENUM,
          values: ["Administrador", "Cliente"],
        },
        cellPhone: DataTypes.STRING,
        telephone: DataTypes.STRING,
        dateOfBirth: DataTypes.DATEONLY,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        isActive: DataTypes.BOOLEAN
      },
      {
        hooks: {
          afterValidate: async user => {
            if (user.password) {
              const hash = await bcrypt.hash(user.password, 10);
              user.password = hash;
            }
          }
        },
        sequelize,
        modelName: "users"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.addresses, {
      foreignKey: "id_address",
      as: "address"
    });
    this.hasMany(models.gallery, {
      foreignKey: "id_user",
      as: "gallery"
    });
  }
}
module.exports = User;
