const express = require('express');
const router = express.Router();

let StudentController = require('../controllers/students.controller');

router.get('/getStudentDetails', StudentController.getStudent);
router.post('/uploadCertificate/:slug', StudentController.uploadCertificate);
router.post('/viewCertificate/:slug', StudentController.viewCertificate);

module.exports = router;