const mongoose = require('mongoose')

const connect = async () => {
    console.log("Trying to connect");
    await mongoose.connect("mongodb+srv://docchain:mypass123@cluster0.j3rz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("DB connected!");
    })
}

module.exports = connect 