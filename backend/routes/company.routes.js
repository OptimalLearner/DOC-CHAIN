const express = require('express');
const router = express.Router();

let InstituteController = require('../controllers/company.controller');

router.post('/loginCompany', InstituteController.loginCompany);
router.post('/registerCompany', InstituteController.registerCompany);
router.post('/verifyCandidate', InstituteController.verifyCandidate);

module.exports = router;