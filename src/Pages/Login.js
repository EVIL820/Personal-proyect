// Login.js
import React from 'react';
import backgroundImage from '../bg.jpg';

function Login() {
  return (
    <div>
      <section className="background-container" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login-box">
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
