const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index); //select
routes.post('/users', UserController.store); //insert 
routes.get('/users/:id', (req, res) => {}); 
routes.put('/users/:id', (req, res) => {}); 
routes.delete('/users/:id', (req, res) => {}); 

routes.get('/home', (req, res) => {
  res.send('Hello World!');
});

module.exports = routes;