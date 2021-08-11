const DB = require("./../models/customerModel");
const userDB = DB.userAccount;

exports.getCustomerData = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    userDB.find({email, password}, (err, result) => {
        if (err) throw new Error(err);
        if(result.length > 0)
            res.json(result.length);
        else
            res.json("Credentials do not match!")
    });
};