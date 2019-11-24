const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const City = require('../models/City');
const State = require('../models/State');
const Neighborhood = require('../models/Neighborhood');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

User.init(connection);
City.init(connection);
State.init(connection);
Neighborhood.init(connection);
Address.init(connection);

Address.associate(connection.models);

module.exports = connection;