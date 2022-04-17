const Stud = require('../models/students')
exports.loginStud = async (req, res) => {
    console.log(req.body)
    try {
        const data = await Stud.findOne({ uid: req.body.uid });
        if (data) {
            console.log(req.body.uid)
            console.log(data.uid);
            if (data.password === req.body.password) {
                context={"message":"Login Success!!"};
                res.json(context);
                
            } else {
                context = {"message": "Incorrect Password"};
                console.log(req.body.password);
                console.log(data.password);
                res.json(context);
            }
        } else {
            context = {"message": "User Not found"};
            res.json(context);
        }
    } catch (err) {
        console.log(err);
        context = {"message": "Login Failed"};
        res.json(context);
    }
}

