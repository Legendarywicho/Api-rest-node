'use strict';

const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const app = require('./app.js');
const config = require('./config.js');



// Setting up the database in Mongo
mongoose.connect(config.db, (err, res)=>{
  if(err){
    console.log('There was an error on the conection');
  };
  // There was a stable conexion
  console.log('Database conexion has been secure');
  // one everthing is OK we can start listening our get method
  app.listen(config.port, () =>{
    console.log(`Listening on the port ${port}`);
  });
});

