const express = require('express');
const UserController = require('./controllers/UserController');
const AuthenticateController = require('./controllers/AuthenticateController');
const CityController = require('./controllers/CityController');
const StateController = require('./controllers/StateController');
const NeighborhoodController = require('./controllers/NeighborhoodController');
const AddressController = require('./controllers/AddressController');
const authMiddleware = require('./middleware/auth');

const routes = express.Router();

routes.get('/api', (req, res) => {
  res.send({
    title: "Node API",
    version: "0.0.1"
  });
});

routes.post('/api/authenticate', AuthenticateController.authenticate);
routes.post('/api/users', UserController.insert);
routes.use(authMiddleware)

routes.get('/api/users', UserController.selectAll);
routes.get('/api/users/:id', UserController.select);
routes.put('/api/users/:id', UserController.update);
routes.delete('/api/users/:id', UserController.delete);

routes.post('/api/cities', CityController.insert);
routes.get('/api/cities', CityController.selectAll);
routes.get('/api/cities/:id', CityController.select);

routes.post('/api/states', StateController.insert);
routes.get('/api/states', StateController.selectAll);
routes.get('/api/states/:id', StateController.select);

routes.post('/api/neighborhoods', NeighborhoodController.insert);
routes.get('/api/neighborhoods', NeighborhoodController.selectAll);
routes.get('/api/neighborhoods/:id', NeighborhoodController.select);

routes.post('/api/addresses', AddressController.insert);
routes.get('/api/addresses', AddressController.selectAll);
routes.get('/api/addresses/:id', AddressController.select);
routes.put('/api/addresses/:id', AddressController.update);

module.exports = routes;