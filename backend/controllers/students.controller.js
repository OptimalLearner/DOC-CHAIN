const StudentService = require('../services/students.services');

const getStudent = async (req, res) => {
    try {
        let students = await StudentService.getStudent({})
        return res.status(200).json({ status: 200, data: students, message: "Succesfully Retrieved Student Data" });
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

module.exports = { getStudent }