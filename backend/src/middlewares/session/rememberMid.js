//This middleware checks that exists an user in cookies but don't in session, if so, assign the first one to the session. Otherwise it'll continue

const rememberMid = (req, res, next) => {
    if (req.cookies.remember != undefined && req.session.userLogged === undefined) {
        req.session.userLogged = req.cookies.remember; //assign the user in cookies to the session
    } else {
        next();
    }
}

module.exports = rememberMid;