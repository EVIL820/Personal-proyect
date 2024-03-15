import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importa AppRoutes en lugar de Routes
import reportWebVitals from "./unused/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Usa AppRoutes en lugar de Routes */}
  </React.StrictMode>,
  document.getElementById("root")
);

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals
reportWebVitals();
