import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Se ha enviado un correo electrónico de recuperación a:", {
      username,
      email,
    });
  };

  return (
    <div>
      <section className="background-container">
        <div className="forgot-password-box">
          <Link to="/" className="back-link">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </Link>
          <form onSubmit={handleSubmit}>
            <h2>Recuperar Contraseña</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Usuario</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Correo Electrónico</label>
            </div>
            <button type="submit">Enviar Correo de Recuperación</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
