const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    uid: {
        type: String
    },
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
    institute_code: {
        type: String
    },
    degree: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'studs'
})

module.exports = mongoose.model('Students', studentSchema)