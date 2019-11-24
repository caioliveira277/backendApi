# backendApi
Node js
Sequelize, sequelize-cli (
    npx sequelize init == initialize,
    npx sequelize migration:create --name=create-users
    npx sequelize db:migrate == executa as migrations,
    npx sequelize db:migrate:undo == desfaz a ultima migration

     npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js == desfaz migration especifica
)