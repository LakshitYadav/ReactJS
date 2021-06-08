const express = require('express');
const auth = require('../middleware/auth');
const productController = require('../controller/productController');

const productRoutes = express.Router();

productRoutes.post('/addProduct', auth.verifyToken, auth.isAdmin, productController.addProduct);
productRoutes.get('/products', auth.verifyToken, productController.getAllProducts);
productRoutes.post('/editProduct', auth.verifyToken, auth.isAdmin, productController.updateProduct);
productRoutes.post('/deleteProduct', auth.verifyToken, auth.isAdmin, productController.deleteProduct);


module.exports = productRoutes;