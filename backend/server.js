const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.get('/', (req, res) => {
    res.end('Doc-Chain Online!');
});

let PORT = config.get('app.port');
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});