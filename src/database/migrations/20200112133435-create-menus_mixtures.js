"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("menus_mixtures", {
      id_menu: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: { model: "menus", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      id_mixture: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: { model: "mixtures", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("menus_mixtures");
  }
};
