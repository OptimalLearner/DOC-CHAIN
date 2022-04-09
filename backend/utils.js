require('dotenv').config()

const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secret_key = Buffer.from(process.env.CRYPTO_SECRET_KEY);
const init_vector = Buffer.from(process.env.CRYPTO_INIT_VECTOR);

const IPFS = require('ipfs-api');
const ipfs = new IPFS('localhost', '5001', { protocol:'http' });

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, secret_key, init_vector);
    let encryptedData = cipher.update(text, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

function decrypt(text) {
    let decipher = crypto.createDecipheriv(algorithm, secret_key, init_vector);
    let decryptedData = decipher.update(text, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
}