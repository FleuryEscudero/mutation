'use strict'

var fs = require ('fs');
var path = require ('path');
var Mutation = require('../models/mutation.models');

//Funcion de Pruebas
// function pruebas(req, res) {
//     res.status(200).send({
//         menssage: 'Esta ruta es de prueba en mi api restful con mongo y node de mutation'
//     });
// };


//funcion para salvar la cadena de ADN
function saveMutation (req,res){
    var mutation = new Mutation();
    var params = req.body;

    mutation.combination =params.combination;
    mutation.result = params.result;

        comniation.save ((err, mutationStored)=>{
            if (err){
                res.status(500).send({message: 'Error al guardar la cadena de ADN'});
            }else {
                if (!mutationStored){
                    res.status(500).send({message: 'La cadena de ADN no ha sido guardada'});
                }else{
                    res.status(200).send({mutation: mutationStored});
                }
            }
        })
    };


//funcion para extraer la cadena de ADN
function getMutation (req,res){
    var mutationId = req.params.id;

    console.log(mutationId);
       Mutation.findById(mutationId,(err,mutation)=> {
           if (err){
                   res.status(500).send({message: ' Error en la petición'});
           }else{
               if (!mutation){
                   console.log(!mutationId);
                   res.status(404).send({message: ' La cadena de ADN no existe no existe'})
               }else{
                   res.status(200).send({mutation});
               }
           }
       });
    
            
    };

module.exports = {
   //pruebas,
   saveMutation,
   getMutation
        }