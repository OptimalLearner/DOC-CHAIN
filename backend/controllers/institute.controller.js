const InstituteService = require('../services/institute.services');

const loginInstitute = async (req, res) => {
    try {
        let result = await InstituteService.loginInstitute(req.body.code, req.body.password)
        if(result == 'Success') {
            return res.end('Login Success');
        } else {
            return res.end('Login Failed');
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while login');
    }
}

const registerInstitute = async (req, res) => {
    try {
        let result = await InstituteService.registerInstitute(req.body.name, req.body.email, req.body.code, req.body.password)
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

module.exports = { loginInstitute, registerInstitute }