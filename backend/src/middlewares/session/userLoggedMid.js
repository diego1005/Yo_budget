//This middleware checks that exists an user logged in, if so, return its data. Otherwise it'll notified.

const userLoggedMid = (req, res, next) => {
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
}

module.exports = userLoggedMid;