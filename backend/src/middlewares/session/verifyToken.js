//This middleware checks token exists and match for continue
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    jwt.verify(req.token, "userToken", (err, data) => {
        if (err) {
            res.status(500).json({
                msg: "missing token or invalid",
                error: err,
                status: "denied"
            })
        } else {
            res.status(200).json({
                data,
                status: "success"
            })
        }
    });
}

module.exports = verifyToken;