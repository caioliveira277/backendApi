"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("menus_sideDishes", {
      id_menu: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: { model: 'menus', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      id_sideDishe: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: { model: 'sideDishes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("menus_sideDishes");
  }
};
