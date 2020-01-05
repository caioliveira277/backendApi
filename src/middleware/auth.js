const token = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader) throw "No token provided";

    const parts = authHeader.split(" ");

    if (!parts.lengh === 2) throw "Token error";

    const [scheme, webtoken] = parts;

    if (!/^Bearer$/i.test(scheme)) throw "Invalid format token";

    token.verify(webtoken, process.env.SECRET_KEY, (error, decoded) => {
      if (error) throw "Invalid token";

      req.id = decoded.id;
      return next();
    });
  } catch (error) {
    return res.status(401).json(error);
  }
};
