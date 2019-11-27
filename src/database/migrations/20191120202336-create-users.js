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
        allowNull: true,
        defaultValue: null,
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
