const express = require("express");
const { Author } = require("../models/Author.js");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // const email = req.body.email;
    // const password = req.body.password;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Se deben especificar los campos email y password" });
    }

    const author = await Author.findOne({ email }).select("+password");

    if (!author) {
      // return res.status(404).json({ error: "No existe un usuario con ese email" });
      // Por seguridad mejor no indicar qué usuarios no existen
      return res.status(401).json({ error: "Email y/o contraseña incorrectos" });
    }

    // Comprueba la pass
    if (author.password === password) {
      // Quitamos password de la respuesta
      const bookWithoutPass = author.toObject();
      delete bookWithoutPass.password;

      return res.status(200).json(bookWithoutPass);
    } else {
      return res.status(401).json({ error: "Email y/o contraseña incorrectos" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = { loginRouter: router };
