const StudentService = require('../services/students.services');
const { updateAsset, getTransactionData } = require('../src/create');
const functions  = require('../utils');
const formidable = require("formidable");

const getStudent = async (req, res) => {
    try {
        let students = await StudentService.getStudent({})
        return res.status(200).json({ status: 200, data: students, message: "Succesfully Retrieved Student Data" });
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

const uploadCertificate = async (req, res) => {
    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.log("Error parsing the files");
                return res.status(400).json({
                    status: "Fail",
                    message: "There was an error parsing the files",
                    error: err,
                });
            } else {
                hash = await functions.addOneFileToIPFS(files.image.filepath);
                await updateAsset(req.session.user, hash);
                console.log('updated!!!')
                return res.status(200).end('updated')
            }
        });
    } catch(e) {
        throw Error('Unable To Fetch Data');
    }
}

const viewCertificate = async (req, res) => {
    blockData = await getTransactionData(req.session.user);
    url = await functions.getFileFromIPFS(blockData.degree_certificate);
    return res.end(url);
}

module.exports = { getStudent, uploadCertificate, viewCertificate }