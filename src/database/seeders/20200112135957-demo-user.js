"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Snow",
          email: "john_snow123@live.com",
          password: "mypass",
          username: "myusername",
          cpf: "44809496821",
          dateOfBirth: "1999-12-09",
          cellPhone: "015998520550",
          telephone: "01530212905",
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true,
          type: "Administrador"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
