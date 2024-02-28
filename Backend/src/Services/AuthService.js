const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Ruta para el registro de usuarios
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o correo electrónico ya está en uso.' });
        }

        // Crear un nuevo usuario
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al registrar el usuario.' });
    }
});

module.exports = router;
