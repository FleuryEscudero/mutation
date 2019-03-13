'use strict'

var express = require('express');
var bodyParser = require ('body-parser');
var cors =require ('cors');

var app = express ();


//cargar rutas
var mutationController = require ('./routes/mutation.routes');

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS
app.use(cors());

//rutas base

app.use('/api',mutationController);
module.exports = app;
