//This middleware is neccesary as security check before make any important change on the user account
const User = require("../../database/models");


const verifyPassword = (req, res, next) => {
    User.findOne({
        attributes: ["password"],
        where: {
            id: req.params.id
        }
    })
        .then(userPass => {
            //user find
            if (userPass != null) {
                //compare password
                let authPass = bcrypt.compareSync(req.body.password, userPass);
                //password pass
                if (authPass) {
                    next();
                } else {
                    //password wrong
                    res.status(500).json({
                        msg: "password wrong",
                        status: "denied"
                    })
                }
            }
        })
        .catch(err => {
            res.status(500).json({
                msg: "error find user",
                status: "denied"
            })
        })
}

module.exports = verifyPassword;