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
    /*
    if (req.session.userLogged != undefined) {
        res.status(200).json({
            user: req.session.userLogged, //returns the user data to be used in the profile view
            status: "user logged in"
        })
    } else {
        res.status(200).json({
            status: "no user logged in" //notifies that doesn't exist a user logged in
        })
    }
    */
}

module.exports = userToken;