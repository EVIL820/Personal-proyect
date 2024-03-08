const express = require("express");
const router = express.Router();
const AuthService = require("../services/AuthService");

// Ruta para el registro de usuarios
router.post("/register", AuthService.register);

// Ruta para el inicio de sesión de usuarios
router.post("/login", AuthService.login);

module.exports = router;
