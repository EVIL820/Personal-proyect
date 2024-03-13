import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
              <input
                type={showPassword ? "text" : "password"}
                value={inputValue}
                onChange={handleInputChange}
                required
              />
              <label>Contraseña</label>
              {inputValue && (
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <ion-icon name="eye-outline"></ion-icon>
                  ) : (
                    <ion-icon name="eye-off-outline"></ion-icon>
                  )}
                </button>
              )}
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Recordarme
              </label>
              <a href="/forgotPassword">¿Olvidaste tu contraseña?</a>
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
