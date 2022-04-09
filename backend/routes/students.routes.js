const express = require('express');
const router = express.Router();

let StudentController = require('../controllers/students.controller');

router.get('/getStudentDetails', StudentController.getStudent);

module.exports = router;