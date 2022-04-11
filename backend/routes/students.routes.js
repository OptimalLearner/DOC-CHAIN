const express = require('express');
const router = express.Router();

let StudentController = require('../controllers/students.controller');

router.get('/getStudentDetails', StudentController.getStudent);
router.post('/uploadCertificate', StudentController.uploadCertificate);
router.post('/viewCertificate', StudentController.viewCertificate);

module.exports = router;