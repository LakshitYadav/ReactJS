const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controller/userController');

const userRoutes = express.Router();

userRoutes.post('/addUser', auth.verifyToken, auth.isAdmin, userController.addUser);
userRoutes.get('/users', auth.verifyToken, userController.getAllUsers);
userRoutes.post('/editUser', auth.verifyToken, auth.isAdmin, userController.updateUser);
userRoutes.post('/deleteUser', auth.verifyToken, auth.isAdmin, userController.deleteUser);

module.exports = userRoutes;
