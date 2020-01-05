const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "temp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "temp", "uploads"));
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(errror);

        const filename = `${hash.toString("hex")}-${file.originalname}`;
        callback(null, filename);
      });
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
    files: 1
  },
  fileFilter: (req, file, callback) => {
    const allowdMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (allowdMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(
        new Error("Somente imagens jpeg, png, gif e webp são aceitas"), false
      );
    }
  }
};
