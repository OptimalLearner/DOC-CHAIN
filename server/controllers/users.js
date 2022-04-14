const User = require('../models/users')
exports.loginUser = async (req, res) => {
    console.log(req.body)
    try {
        const data = await User.findOne({ email: req.body.email });
        if (data) {
            if (data.password === req.body.password) {
                res.json(data);
            } else {
                context = {"message": "Incorrect Password"};
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


exports.registerUser = async (req, res) => {
    try {
        const user = {
            
            name:req.body.name,
            email:req.body.email,
            code:req.body.code,
            password:req.body.password,
           
        }   
        const newUser = new User(user)
        await newUser.save()
        context = {"message": "Registration Success"};
        res.json(context);
    }
    catch (err) 
    {
        console.log(err);
        context = {"message": "Registration Failed"};
        res.json(context);
    }
}