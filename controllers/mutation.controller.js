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
function saveMutation (req,res){
    var mutation = new Mutation();
    var params = req.body;
    
    mutation.combination =params.combination;
    

    mutation.result = Utils.hasMutation(mutation.combination);

     mutation.save ((err, mutationStored)=>{
        if (err){ // VALIDACION DE ORM
            res.status(500).send({message: 'Error al guardar la cadena de ADN', error : err});
        }else {
            if (!mutationStored){ // VALIDACION SI SE GUARDO EL RESULTADO 
                res.status(500).send({message: 'La cadena de ADN no ha sido guardada'});
            }else{
                if(!mutation.result) { // Validamos si la cadena contiene los caracteres correctos y regresa Forbidden
                    res.status(403).send({message: '403-Forbidden'});
                } else { // Regresa resultado correcto
                    res.status(200).send({mutation: 'HTTP 200-OK'});
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


function stats (req,res){
    Mutation.count({result:true})


}

module.exports = {
   //pruebas,
   saveMutation,
   getMutation,
   stats
        }