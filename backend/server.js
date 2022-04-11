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

let mongoDB = 'mongodb://' + config.get('db.host') + ':' + config.get('db.port') + '/' + config.get('db.name')
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

app.get('/', (req, res) => {
    req.session.user = '2020301075';
    res.end('Doc-Chain Online!');
});

// app.post('/hello', async (req, res) => {
    
// })

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