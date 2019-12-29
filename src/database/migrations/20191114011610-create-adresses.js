'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('addresses', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_city: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'cities', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      id_neighborhood: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'neighborhoods', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      id_state: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'states', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      zipcode: {
        allowNull: false,
        type: 'CHAR(8)',
      },
      number: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      street: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      complement: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('addresses');
  }
};
