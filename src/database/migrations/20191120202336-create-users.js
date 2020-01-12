'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: 'CHAR(60)',
      },
      isActive: {
        allowNull: false,
        defaultValue: false,
        type: 'BOOLEAN',
      },
      cpf: {
        allowNull: false,
        unique: true,
        type: 'CHAR(11)',
      },
      dateOfBirth: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      cellPhone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      telephone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM({
          values: ["Administrador","Cliente"]
        }),
      },
      id_address: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: { model: 'addresses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('users');
  }

};
