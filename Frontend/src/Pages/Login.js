import React from "react";

function Login() {
  return (
    <div>
      <section className="background-container">
        <div className="login-box">
          <form action="">
            <h2>Iniciar Sesión</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Correo Electrónico</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Contraseña</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Recordarme
              </label>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <div className="register-link">
              <p>
                ¿No tienes una cuenta? <a href="/register">Registrate</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
