const mongoose = require("mongoose");

// URL de conexión a tu base de datos MongoDB y nombre de la base de datos
mongoose
  .connect("mongodb://localhost:27017/Personal-Proyect")
  .then(() => {
    console.log("Conexión exitosa a la base de datos.");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Exportar la instancia de conexión para que pueda ser utilizada en otros archivos
module.exports = mongoose.connection;
