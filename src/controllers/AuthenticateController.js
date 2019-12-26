const Authenticate = require("../models/User");
const bcrypt = require("bcryptjs");
const token = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  async authenticate(req, res) {
    try {
      const { username, password } = req.body;
      const user = await Authenticate.findOne({
        attributes: ["password", "id", "name"],
        where: { username: username }
      });

      if (!user)
        throw "Usuario não encontrado, verifique seus dados e tente novamente.";

      if (!(await bcrypt.compare(password, user.password)))
        throw "Senha inválida";

      const webtoken = token.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400
      });

      return res.json({ message: `${user.name}`, token: webtoken });
    } catch (error) {
      return res.json({
        token: false,
        message: error
      });
    }
  }
};
