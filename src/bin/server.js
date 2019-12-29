const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const app = express();

var corsOptions = {
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

require('../database');
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(3000);
