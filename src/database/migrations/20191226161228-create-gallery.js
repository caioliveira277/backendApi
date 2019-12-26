"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("gallery", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      path: {
        allowNull: false,
        type: DataTypes.STRING
      },
      id_user: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("gallery");
  }
};
