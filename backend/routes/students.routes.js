const express = require('express');
const router = express.Router();

let StudentController = require('../controllers/students.controller');

router.get('/getStudentDetails', StudentController.getStudent);
router.post('/uploadCertificate/:slug', StudentController.uploadCertificate);
router.post('/viewCertificate/:slug', StudentController.viewCertificate);
router.post('/loginStudent', StudentController.loginStud);
router.post('/addStudent', StudentController.addStudent);

module.exports = router;