const express = require('express');
const UserController = require('./controllers/UserController');
const CityController = require('./controllers/CityController');
const StateController = require('./controllers/StateController');
const NeighborhoodController = require('./controllers/NeighborhoodController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send({
    title: "Node API",
    version: "0.0.1"
  });
});

routes.post('/users', UserController.insert);
routes.get('/users', UserController.selectAll);
routes.get('/users/:id', UserController.select);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/cities', CityController.insert);
routes.get('/cities', CityController.selectAll);
routes.get('/cities/:id', CityController.select);

routes.post('/states', StateController.insert);
routes.get('/states', StateController.selectAll);
routes.get('/states/:id', StateController.select);

routes.post('/neighborhoods', NeighborhoodController.insert);
routes.get('/neighborhoods', NeighborhoodController.selectAll);
routes.get('/neighborhoods/:id', NeighborhoodController.select);

routes.post('/addresses', AddressController.insert);
routes.get('/addresses', AddressController.selectAll);
routes.get('/addresses/:id', AddressController.select);
routes.put('/addresses/:id', AddressController.update);

module.exports = routes;