const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.secretKey, (err, payload) => {
        if(err) {
            console.log("User is not authenticated");
            res.status(401).json({verified: false});
            return;
        } else {
            console.log("User is authenticated")
            next();
        }
    });
}

module.exports = {
    authenticate
};