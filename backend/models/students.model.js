const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno: {
        type: Number
    },
    institute: {
        type: String
    },
    degree: {
        type: String
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('Students', studentSchema)