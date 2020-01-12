# backendApi
Utils:
Sequelize, sequelize-cli (
    ```
    npx sequelize init
    npx sequelize migration:create --name=create-users
    npx sequelize db:migrate
    npx sequelize db:migrate:undo
    npx sequelize-cli db:migrate:undo:all --to XXXXX-create-posts.js  #XX = name migration
    ```
    seeders
    npx sequelize-cli seed:generate --name demo-user
    npx sequelize-cli db:seed:all
)
