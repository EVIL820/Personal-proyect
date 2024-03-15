import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [iconName, setIconName] = useState("person");
  const [inputLabel, setInputLabel] = useState("Nombre de Usuario");
  const navigate = useNavigate(); // Utilizamos useNavigate para obtener la función de navegación

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const isEmail = value.includes("@");

    setIdentifier(value);
    setIconName(isEmail ? "mail" : "person");
    setInputLabel(isEmail ? "Correo Electrónico" : "Nombre de Usuario");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Realizar la solicitud al backend para iniciar sesión
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await response.json();
      console.log("Respuesta del backend:", data);

      // Si el inicio de sesión es exitoso, navegamos a la página Home
      if (response.ok) {
        navigate("/Home");
      } else {
        // Aquí puedes manejar los errores de inicio de sesión, como mostrar un mensaje de error al usuario
        console.error("Error durante el inicio de sesión:", data.error);
        alert(data.error); // Muestra el mensaje de error recibido del backend
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert(
        "Ocurrió un error durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div>
      <section className="background-container">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name={iconName}></ion-icon>
              </span>
              <input
                type="text"
                value={identifier}
                onChange={handleInputChange}
                required
              />
              <label>{inputLabel}</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {password && (
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
              <label>Contraseña</label>
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
