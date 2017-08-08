'use strict';

const express = require('express');
const productCtrl = require('../controllers/product.js');
const api = express.Router();


// getting all the products
api.get('/product', productCtrl.getProducts);
// getting information to display
api.get('/product/:productId', productCtrl.getProductId);
// creating a new product
api.post('/product', productCtrl.saveProduct);
//Updating the product through the id
api.put('/product/:productId', productCtrl.updateProducts);
// Deleting the the specific item on the database
api.delete('/product/:productId',productCtrl.deleteProduct);

module.exports = api;