'use strict';

const Product = require('../models/product.js')

function getProductId(req, res){
    let productId = req.params.productId;
    Product.findById(productId, (error, product) =>{
        if(error){
          return res.status(500).send({message:"ERROR al realizar la petiticion"});
        }
        if(!product){
        return res.status(404).send({message:"ERROR al realizar la petiticion"});
        }
        res.status(200).send({product: product});
    });
}
function getProducts(req, res){
    Product.find({}, (err, products) =>{
        if(err){
            console.log("There is an error");
            return res.status(500).send({message:"ERROR al realizar la petiticion"+err});
        }
        if(!products){
            return res.status(404).send({message:"No se encuentra la ruta"});
        }
        res.send(200, {products});
    });
}
function saveProduct(req, res){
    console.log('POST /api/product');
    console.log(req.body);
    // Our product from the model database
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;

    product.save((error, productStore)=>{
      if(error){
        res.status(500).send({message:'error on saving'})
      }
      res.status(200).send({product:productStore});
    });
}
function updateProducts(req, res){
      // Updating data
    let productPut = req.params.productId;
    let updatedProduct = req.body;

    Product.findByIdAndUpdate(productPut, updatedProduct, (err, finalProduct) =>{
        if(err){
        send.status(200).send({message:"There was an error updating"});
        }
        res.status(200).send({product:finalProduct});
    });
}
function deleteProduct(req, res){
    let productFinal = req.params.productId;
    Product.findById(productFinal, (err, product) =>{
      if(err){
        send.status(500).send({message:'there was an error on deleting'});
      }
      product.remove((err)=>{
        if(err){
          send.status(500).send({message:'there was an error on deleting'});
        }
        console.log("Producto Borrado");
      });
   });
}
module.exports = {
    getProductId,
    getProducts,
    updateProducts,
    deleteProduct,
    saveProduct
}