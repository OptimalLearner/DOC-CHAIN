require('dotenv').config()

const config = require('config');
const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secret_key = Buffer.from(process.env.CRYPTO_SECRET_KEY);
const init_vector = Buffer.from(process.env.CRYPTO_INIT_VECTOR);

const IPFS = require('ipfs-api');
const ipfs = new IPFS('localhost', '5001', { protocol:'http' });

let encrypt = (text) => {
    let cipher = crypto.createCipheriv(algorithm, secret_key, init_vector);
    let encryptedData = cipher.update(text, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

let decrypt = (text) => {
    let decipher = crypto.createDecipheriv(algorithm, secret_key, init_vector);
    let decryptedData = decipher.update(text, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
}

let addOneFileToIPFS = async (file) => {
    let content = fs.readFileSync(file);
    let buff = Buffer.from(content);
    let addedFile = await ipfs.add(buff);
    let encryptedHash = encrypt(addedFile[0].hash);
    return encryptedHash;
}

let getFileFromIPFS = (hash) => {
    url = config.get('ipfs.protocol') + '://' + config.get('ipfs.host') + ':' + config.get('ipfs.port') + '/' + config.get('ipfs.name') + '/'
    decryptedFile = decrypt(hash);
    console.log(url + decryptedFile)
    return url + decryptedFile;
}

module.exports = { encrypt, decrypt, addOneFileToIPFS, getFileFromIPFS }