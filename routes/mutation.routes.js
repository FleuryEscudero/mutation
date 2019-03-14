'use strict'

var express = require('express');
var cors = require('cors');

var mutationController = require ('../controllers/mutation.controller');
var api = express.Router();

api.use(cors());

//api.get('/pruebas', mutationController.pruebas);
api.get ('/mutation/:id?', mutationController.getMutation);
api.post('/mutation',mutationController.saveMutation);
api.get ('/mutationStats/',mutationController.stats);


module.exports = api;