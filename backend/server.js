const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const functions = require('./utils')

const studentRoutes = require('./routes/students.routes')

const app = express();
app.use(cors());

let mongoDB = 'mongodb://' + config.get('db.host') + ':' + config.get('db.port') + '/' + config.get('db.name')
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

app.get('/', (req, res) => {
    res.end('Doc-Chain Online!');
});

app.use('', studentRoutes);

// Testing IPFS
// app.post('/abcd', async (req,res) => {
//     hash = await functions.addOneFileToIPFS('C:/Users/Keval/Downloads/institute_login_img.svg');
//     console.log(hash)
//     f = functions.getFileFromIPFS(hash);
//     res.end(f)
// })


let PORT = config.get('app.port');
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});