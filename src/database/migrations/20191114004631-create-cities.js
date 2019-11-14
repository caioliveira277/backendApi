'use strict';

module.exports = {
 up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('cities', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('cities');
  }
};
