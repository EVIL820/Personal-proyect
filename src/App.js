// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes> {/* Envuelve tus rutas con el componente Routes */}
        {/* Otras rutas de tu aplicación */}
        <Route path="/" element={<Login />} /> {/* Utiliza el atributo element para especificar el componente */}
      </Routes>
    </Router>
  );
}

export default App;
