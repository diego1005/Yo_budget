//This middleware checks that exists an user logged in, if so, return its data. Otherwise it'll notified.
const jwt = require("jsonwebtoken");

const userToken = (req, res, next) => {
    const userToken = req.headers["authorization"];
    if (userToken != undefined) {
        req.token = userToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = userToken;