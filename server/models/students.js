const mongoose = require('mongoose')

const studSchema = new mongoose.Schema({
    uid:
    {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    instcode:{
        type: String,
        required: true
    },   
    
    instname:{
        type: String,
        required: true
    },
    
    gender:{
        type: String,
        required: true
    },     
    
    phno:{
        type: String,
        required: true
    },  
    password: {
        type: String,
        required: true
    }
    
    
}, { versionKey: false })

const Stud = mongoose.model('Stud', studSchema)

module.exports = Stud