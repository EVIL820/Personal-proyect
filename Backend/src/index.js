const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authController = require("./Controllers/AuthController");
const mongooseConnection = require("../Config/mongooseConfig");

const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Rutas de autenticación
app.use("/auth", authController);

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
