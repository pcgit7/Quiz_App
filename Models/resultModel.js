const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    quizId : {type : String , required : true},
    createdAt : { type : Date, default : Date.now}
});

const resultModel = mongoose.model('Result',resultSchema);
module.exports = resultModel;