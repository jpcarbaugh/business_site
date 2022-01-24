const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = (req, res) => {
    const { body } = req;

    User.findOne({email: body.email})
    .then(query => {
        if(query) {
            res.status(400).json({error: " Email already in use"});
            return;
        };
    })
    .catch((err) => res.status(400).json(err));

    const newUser = new User(body);

    newUser.save()
    .then((createdUser) => res.json(createdUser))
    .catch((err) => res.status(400).json(err));
};

const login = async (req, res) => {
    const { body } = req;

    if(!body.email) {
        res.status(400).json({error: "No email provided"});
        return;
    }

    let userQuery;
    try {
        userQuery = await User.findOne({email: body.email});
    } catch (err) {
        res.status(400).json({ error: "Email not found"})
    }
    
    if(userQuery === null){
        res.status(400).json({error: "Email not found"});
        return;
    }
    const pwdCheck = bcrypt.compareSync(body.password, userQuery.password);
    if(!pwdCheck){
        res.status(400).json({error: "Email and password do not match"})
    } 
    const userToken = jwt.sign({id: userQuery._id}, process.env.secretKey);

    res
    .cookie("usertoken", userToken, process.env.secretKey, {
        httpOnly: true
    })
    .json({ message: "Successful login"});
};

const logout = (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
}

module.exports = {
    register,
    login,
    logout
};