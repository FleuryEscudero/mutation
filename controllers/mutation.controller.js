'use strict'

var fs = require ('fs');
var path = require ('path');
var Mutation = require('../models/mutation.models');
var Utils = require('../utils/utils');


//Funcion de Pruebas
// function pruebas(req, res) {
//     res.status(200).send({
//         menssage: 'Esta ruta es de prueba en mi api restful'
//     });
// };


//funcion para salvar la cadena de ADN
function saveMutation (req,res){ // uno 
    var mutation = new Mutation();
    var params = req.body;
    let message = '';
    mutation.combination =params.combination;
    console.log(mutation.combination);
    // Recorremos el array 
    mutation.combination.forEach(adn => {
        // aqui validamos la cadena y guardamos el resultado en el modelo 
        mutation.result = Utils.validateADN(adn); // si en algun momento regresa una cadena incorrecta regresara false
    });
     mutation.save ((err, mutationStored)=>{
        if (err){ // VALIDACION DE ORM
            res.status(500).send({message: 'Error al guardar la cadena de ADN', error : err});
        }else {
            if (!mutationStored){ // VALIDACION SI SE GUARDO EL RESULTADO 
                res.status(500).send({message: 'La cadena de ADN no ha sido guardada'});
            }else{
                if(!mutation.result) { // Validamos si la cadena contiene los caracteres correctos y regresa Forbidden
                    res.status(403).send({message: 'la cadena tiene caracteres incorrectos o no cumple con la longitud esperada'});
                } else { // Regresa resultado correcto
                    res.status(200).send({mutation: mutationStored});
                }
            }
        }
    });
};


//funcion para extraer la cadena de ADN
function getMutation (req,res){
    var mutationId = req.params.id;

    console.log(mutationId);
    if (!mutationId){
        Mutation.find({});
    }else {
        Mutation.find({mutation: mutationId}); 
    }
    
};

module.exports = {
   //pruebas,
   saveMutation,
   getMutation
        }