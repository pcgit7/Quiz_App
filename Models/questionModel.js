const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    noOfQuestion : {type : Number , default : 5, required:true},
    category : {type : String , default : 'general' , required : true },
    difficulty : {type : String , default : 'easy'} ,
    topic : {type : String , default : 'general',required : true},
    createdAt: { type: Date, default: Date.now },
});

const questionModel = mongoose.model('Question',questionSchema);
module.exports = questionModel;