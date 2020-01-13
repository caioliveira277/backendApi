const express = require("express");
const UserController = require("./controllers/UserController");
const AuthenticateController = require("./controllers/AuthenticateController");
const CityController = require("./controllers/CityController");
const StateController = require("./controllers/StateController");
const NeighborhoodController = require("./controllers/NeighborhoodController");
const AddressController = require("./controllers/AddressController");
const GalleryController = require("./controllers/GalleryController");
const MenuController = require("./controllers/MenuController");
const MixtureController = require("./controllers/MixtureController");
const SideDisheController = require("./controllers/SideDisheController");
const authMiddleware = require("./middleware/auth");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

routes.get("/api", (req, res) => {
  res.json({
    title: "Node API",
    version: "0.0.1"
  });
});

routes.post("/api/authenticate", AuthenticateController.authenticate);
routes.post("/api/users", UserController.insert);
routes.use(authMiddleware);

routes.get("/api/users", UserController.selectAll);
routes.get("/api/users/:id", UserController.select);
routes.put("/api/users/:id", UserController.update);
routes.delete("/api/users/:id", UserController.delete);

routes.post("/api/cities", CityController.selectInsert);
routes.post("/api/states", StateController.selectInsert);
routes.post("/api/neighborhoods", NeighborhoodController.selectInsert);

routes.post("/api/addresses", AddressController.insert);
routes.get("/api/addresses/:id", AddressController.select);
routes.put("/api/addresses/:id", AddressController.update);

routes.get("/api/menus/:id", MenuController.select);
routes.post("/api/menus", MenuController.insert);

routes.post("/api/menus/mixtures/:id", MenuController.menu_mixture);
routes.post("/api/menus/sideDishes/:id", MenuController.menu_sideDishe);
routes.delete("/api/menus/mixtures/:id", MenuController.deleteMixture);
routes.delete("/api/menus/sideDishes/:id", MenuController.deleteSideDishe);

routes.post("/api/mixtures", MixtureController.insert);
routes.get("/api/mixtures", MixtureController.selectAll);
routes.put("/api/mixtures/:id", MixtureController.update);

routes.post("/api/sideDishes", SideDisheController.insert);
routes.get("/api/sideDishes", SideDisheController.selectAll);
routes.put("/api/sideDishes/:id", SideDisheController.update);

routes.post(
  "/api/upload",
  multer(multerConfig).single("file"),
  GalleryController.insert
);
routes.put(
  "/api/upload/:id",
  multer(multerConfig).single("file"),
  GalleryController.update
);

module.exports = routes;
