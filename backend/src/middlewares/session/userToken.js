//This middleware checks the user logged in, if so, save its token. Otherwise it'll return a redirect action.

const userToken = (req, res, next) => {
    const userToken = req.headers["authorization"];
    if (userToken != undefined) {
        req.token = userToken;
        next();
    } else {
        res.status(500).json({
            msg: "missing token or invalid",
            action: "redirect",
            status: "denied"
        });
    }
}

module.exports = userToken;