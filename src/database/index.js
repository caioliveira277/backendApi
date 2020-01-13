const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");

const User = require("../models/User");
const City = require("../models/City");
const State = require("../models/State");
const Neighborhood = require("../models/Neighborhood");
const Address = require("../models/Address");
const Gallery = require("../models/Gallery");
const Menu = require("../models/Menu");
const Mixture = require("../models/Mixture");
const SideDishe = require("../models/SideDishe");

const connection = new Sequelize(databaseConfig);

User.init(connection);
City.init(connection);
State.init(connection);
Neighborhood.init(connection);
Address.init(connection);
Gallery.init(connection);
Menu.init(connection);
Mixture.init(connection);
SideDishe.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
City.associate(connection.models);
Neighborhood.associate(connection.models);
State.associate(connection.models);
Gallery.associate(connection.models);

Menu.associate(connection.models);
Mixture.associate(connection.models);
SideDishe.associate(connection.models);

module.exports = connection;
