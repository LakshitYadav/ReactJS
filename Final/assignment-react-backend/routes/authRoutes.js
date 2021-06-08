const authController = require('../controller/authController');
const express = require('express');

const authRoutes = express.Router();

authRoutes.post('/login', authController.login);


module.exports = authRoutes;