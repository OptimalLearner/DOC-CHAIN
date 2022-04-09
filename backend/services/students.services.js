let Student = require('../models/students.model');

const getStudent = async (query) => {
    try {
        let students = await Student.find(query);
        return students;
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

module.exports = { getStudent }