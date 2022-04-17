let Student = require('../models/students.model');


const getStudent = async (query) => {
    try {
        let students = await Student.find(query);
        return students;
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

const loginStud = async (uid, password) => {
    const data = await Student.findOne({ uid: uid });
    if (data) {
        if (data.password == password) {
            return 'Success';
            
        } else {
            return 'Fail';
        }
    } else {
        return 'Error';
    }
}

module.exports = { getStudent, loginStud }