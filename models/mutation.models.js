'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MutationSchema = Schema ({
                                combination:String,
                                result:Boolean,
                                });              

module.exports = mongoose.model('Mutation',MutationSchema);