"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("menus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      dateOfPublication: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("menus");
  }
};
