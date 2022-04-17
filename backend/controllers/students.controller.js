const StudentService = require('../services/students.services');
const { updateAsset, getTransactionData } = require('../src/create');
const functions  = require('../utils');
const formidable = require("formidable");

const getStudent = async (req, res) => {
    try {
        let students = await StudentService.getStudent({})
        return res.status(200).json(students);
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

const uploadCertificate = async (req, res) => {
    try {
        let uid = req.params.slug;
        if(uid) {
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
                    await updateAsset(uid, hash);
                    console.log('updated!!!')
                    return res.status(200).end('updated')
                }
            });
        }
    } catch(e) {
        throw Error('Unable To Upload Certificate');
    }
}

const viewCertificate = async (req, res) => {
    try {
        let uid = req.params.slug;
        if(uid) {
            blockData = await getTransactionData(uid);
            url = await functions.getFileFromIPFS(blockData.degree_certificate);
            return res.end(url);
        }
    } catch(e) {
        throw Error('Unable To Fetch Certificate');
    }
}

module.exports = { getStudent, uploadCertificate, viewCertificate }