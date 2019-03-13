'use strict'

var express = require('express');
var cors = require('cors');

var mutationController = require ('../controllers/mutation.controller');
var api = express.Router();

api.use(cors());

//api.get('/pruebas', mutationController.pruebas);
api.get ('mutation', mutationController.getMutation);
api.post('mutation',mutationController.saveMutation);


module.exports = api;