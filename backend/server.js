const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('config');
const cors = require('cors');
require('dotenv').config()

const studentRoutes = require('./routes/students.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: process.env.SESSION_SECRET_KEY, saveUninitialized: true, resave: true}));
app.use(cors());

let mongoDB = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@${process.env.MONGODB_ATLAS_CLUSTER}.j3rz3.mongodb.net/${process.env.MONGODB_ATLAS_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',function() {
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

app.get('/', (req, res) => {
    res.end('Doc-Chain Online!');
});


app.use('', studentRoutes);

//Testing IPFS
// app.post('/abcd', async (req,res) => {
//     hash = await functions.addOneFileToIPFS('C:/Users/Keval/Downloads/Marksheet 1.pdf');
//     console.log(hash)
//     f = functions.getFileFromIPFS(hash);
//     res.end(f)
// })


let PORT = config.get('app.port');
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});