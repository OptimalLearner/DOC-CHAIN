let Student = require('../models/students.model');
const InstituteService = require('../services/institute.services');
let s;
const loginInstitute = async (req, res) => {
    try {
        let result = await InstituteService.loginInstitute(req.body.code, req.body.password)
        if(result == 'Success') {
            let ins = await InstituteService.getInstitute(req.body.code);
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

const initialDashboard = async (req, res) => {
    console.log('hehehehe');
    console.log(s)
    const data = {
        name: s.institute,
        code: s.code
    }
    let fe = await Student.find({ class: 'FE' });
    let se = await Student.find({ class: 'SE' });
    let te = await Student.find({ class: 'TE' });
    let be = await Student.find({ class: 'BE' });
    console.log(data, te.length)
    return res.json({data: data, fe: fe.length, se: se.length, te: te.length, be: be.length});
}

module.exports = { loginInstitute, registerInstitute, initialDashboard }