const Gallery = require("../models/Gallery");
const sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

module.exports = {
  async insert(req, res) {
    try {
      const { originalname: name, size, filename: key } = req.file;
      const { type, id_user } = req.body;
      gallery = await Gallery.create({
        name,
        size,
        key,
        type,
        id_user,
        createdAt: sequelize.fn("NOW")
      });
      return res.status(200).json({ key: gallery.key, id: gallery.id});
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },

  async update(req, res) {
    try {
      const { originalname: name, size, filename: key } = req.file;
      const { type, oldUpload } = req.body;
      await Gallery.update(
        {
          name,
          size,
          key,
          type
        },
        { where: { id: req.params.id } }
      );
      promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "temp", "uploads", oldUpload)
      ).then(() => {
        return res.status(200).json(key)
      });
      
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};
