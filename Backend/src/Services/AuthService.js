const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtkey = "SoyMuyBuenoProgramandoEnLaMadugada";

const AuthService = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        return res.status(400).json({
          message: "El nombre de usuario o correo electrónico ya está en uso.",
        });
      }

      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear un nuevo usuario con la contraseña encriptada
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: "Usuario registrado exitosamente." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Hubo un problema al registrar el usuario." });
    }
  },

  login: async (req, res) => {
    try {
      const { identifier, password } = req.body;
      const userFind = await User.findOne({
        $or: [{ username: identifier }, { email: identifier }],
      });

      if (!userFind) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const validPassword = await bcrypt.compare(password, userFind.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      // Si la contraseña es válida, generar un token JWT
      const token = jwt.sign({ userId: userFind._id }, jwtkey, {
        expiresIn: "1h",
      });

      // Devolver el token al cliente
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = AuthService;
