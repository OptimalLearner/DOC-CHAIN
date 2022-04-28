let Company = require('../models/company.model');
const CompanyService = require('../services/company.services');
let s;
const loginCompany = async (req, res) => {
    try {
        let result = await CompanyService.loginCompany(req.body.code, req.body.password)
        if(result == 'Success') {
            let ins = await CompanyService.getCompany(req.body.code);
            if(ins != 'Error') {
                req.session.institute = ins.name;
                req.session.code = req.body.code;
                console.log(req.session)
                s = req.session;
                return res.end('Login Success');
            }
        } else {
            return res.end('Login Failed');
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while login');
    }
}

const registerCompany = async (req, res) => {
    try {
        let result = await CompanyService.registerCompany(req.body.name, req.body.email, req.body.code, req.body.password)
        if(result == 'Success') {
            return res.end('Sign Up Success');
        } else {
            return res.end('Sign Up Failed ' + result);
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while signup');
    }
}

const verifyCandidate = async (req, res) => {
    try {
        // xD
    } catch(e) {
        console.log(e);
        return res.end('Error while verification');
    }
}

module.exports = { loginCompany, registerCompany, verifyCandidate }