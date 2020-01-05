require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require("../routes");
const app = express();
const path = require("path");

const corsOptions = {
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

require("../database");
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/api/files",
  express.static(path.resolve(__dirname, "..", "..", "temp", "uploads"))
);
app.use(routes);

app.listen(3000);
