const db = require("../database/models");
const { user } = require("../database/models");
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const userController = {
    //LOGIN
    login: (req, res) => {
        //form fields validations
        const errors = validationResult(req);
        //validations pass
        if (errors.isEmpty()) {
            //user search
            user.findOne({
                where: {
                    email: req.body.username
                }
            })
                .then(user => {
                    //user find
                    if (user != null) {
                        //compare password
                        let authPass = bcrypt.compareSync(req.body.password, user.password);
                        user.password = undefined;
                        //password pass
                        if (authPass) {
                            let token = '';
                            //remember me checkbox
                            if (req.body.remember != undefined) {
                                //checks if token expired after close windows if does't especify an expiredIn property
                                token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: 60 * 10 });
                            } else {
                                //generate user token
                                token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: 60 * 10 });
                            }
                            res.status(200).json({
                                token,
                                status: "success"
                            })
                        } else {
                            //password wrong
                            res.status(500).json({
                                msg: "password wrong",
                                old: req.body,
                                status: "denied"
                            })
                        }
                    } else {
                        //user don't exist
                        res.status(500).json({
                            msg: "user doesn't exist",
                            old: req.body,
                            status: "denied"
                        })
                    }
                })
                .catch(err => {
                    res.status(500).json({
                        msg: "error user search",
                        error: err,
                        old: req.body,
                        status: "denied"
                    })
                })
        } else {
            //validation with errors
            res.status(500).json({
                errors: errors.mapped(),
                old: req.body,
                status: "denied"
            })
        }
    },
    //SIGNIN
    signin: (req, res) => {
        //form fields validations
        const errors = validationResult(req);
        //validations pass
        if (errors.isEmpty()) {
            //user search
            user.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    //user existent
                    if (user != null) {
                        //delete file upload
                        userController.deleteImg(false, req.file.filename);
                        res.status(500).json({
                            msg: "Email already exists",
                            old: req.body,
                            status: "denied"
                        })
                    } else {
                        //new user
                        user.create({
                            //CREATE register on db
                            name: req.body.name,
                            lastname: req.body.lastname,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            url_img: req.file.filename
                        })
                            .then(newUser => {
                                newuser.password = undefined;
                                //generate user token
                                const token = jwt.sign({ newUser }, process.env.SECRET_KEY, { expiresIn: 60 * 10 });
                                res.status(200).json({
                                    data: newUser,
                                    token,
                                    status: "success"
                                })
                            })
                            .catch(err => {
                                //delete file upload
                                userController.deleteImg(false, req.file.filename);
                                res.status(500).json({
                                    msg: "create user error",
                                    error: err,
                                    status: "denied"
                                })
                            })
                    }
                })
                .catch(err => {
                    //delete file upload
                    userController.deleteImg(false, req.file.filename);
                    res.status(500).json({
                        msg: "find user error",
                        error: err,
                        status: "denied"
                    })
                })
        } else {
            //validations with errors
            //delete file upload
            // userController.deleteImg(false, req.file.filename);
            res.status(500).json({
                errors: errors.mapped(),
                old: req.body,
                status: "denied"
            })
        }
    },
    //CHECK TOKEN
    checkToken: (req, res) => {
        const userToken = req.headers["authorization"];
        jwt.verify(userToken, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(200).json({
                    msg: "missing token or invalid",
                    action: "redirect",
                    status: "denied"
                });
            } else {
                res.status(200).json({
                    token: userToken,
                    status: "success"
                })
            }
        })
    },
    //LOGOUT
    logout: (req, res) => {
        try {
            req.headers.authorization = null;
            res.status(200).json({
                msg: "user logout",
                status: "success"
            })
        } catch (error) {
            res.status(500).json({
                msg: "error to logout user",
                error: error,
                status: "denied"
            })
        }
    },
    //READ
    list: (req, res) => {
        user.findAll()
            .then(result => {
                res.status(200).json({
                    count: result.length,
                    data: result,
                    status: "success"
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err,
                    status: "denied"
                })
            })
    },
    listOne: (req, res) => {
        const { id } = req.params;
        user.findOne({ where: { id } })
            .then(result => {
                res.status(200).json({
                    data: result,
                    status: "success"
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: "user not found",
                    error: err,
                    status: "denied"
                })
            })
    },
    //UPDATE
    editUserData: (req, res) => {
        //form fields validations
        const errors = validationResult(req);
        //validations pass
        if (errors.isEmpty()) {
            user.update(
                {
                    //register data to update
                    name: req.body.name,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                },
                {
                    //find that register to update
                    where: {
                        id: req.params.id
                    }
                }
            )
                .then(result => {
                    res.status(200).json({
                        result: result,
                        status: "success"
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        msg: "error updating user",
                        error: err,
                        status: "denied"
                    })
                })
        } else {
            //validation with errors
            res.status(500).json({
                errors: errors.mapped(),
                old: req.body,
                status: "denied"
            })
        }
    },
    editUserImg: (req, res) => {
        //form fields validations
        const errors = validationResult(req);
        //validations pass
        if (errors.isEmpty()) {
            user.update(
                {
                    //user img update
                    url_img: req.file.filename
                },
                {
                    //find that user to update
                    where: {
                        id: req.params.id
                    }
                }
            )
                .then(result => {
                    //delete old img user
                    userController.deleteImg(false, req.body.old_url_img);
                    res.status(200).json({
                        result: result,
                        status: "success"
                    })
                })
                .catch(err => {
                    //delete img user
                    userController.deleteImg(false, req.file.filename);
                    res.status(500).json({
                        msg: "error updating img user",
                        error: err,
                        status: "denied"
                    })
                })
        } else {
            //validation with errors
            res.status(500).json({
                errors: errors.mapped(),
                old: req.body,
                status: "denied"
            })
        }
    },
    editUserPassword: (req, res) => {
        //form fields validations
        const errors = validationResult(req);
        //validations pass
        if (errors.isEmpty()) {
            //find old password
            user.findOne({
                attributes: ["password"],
                where: {
                    id: req.params.id
                }
            })
                .then(user => {
                    //user exists
                    if (user != null) {
                        //compare old password
                        const authPass = bcrypt.compareSync(req.body.oldPassword, user.password);
                        if (authPass) {
                            user.update(
                                {
                                    //user img update
                                    password: bcrypt.hashSync(req.body.password, 10)
                                },
                                {
                                    //find that user to update
                                    where: {
                                        id: req.params.id
                                    }
                                }
                            )
                                .then(result => {
                                    res.status(200).json({
                                        msg: "password changed successfully",
                                        result: result,
                                        status: "success"
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        msg: "error changing password",
                                        error: err,
                                        status: "denied"
                                    })
                                })
                        } else {
                            res.status(500).json({
                                msg: "old password is wrong",
                                status: "denied"
                            })
                        }
                    }
                })
                .catch(err => {
                    res.status(500).json({
                        msg: "error updating password user",
                        error: err,
                        status: "denied"
                    })
                })
        } else {
            //validation with errors
            res.status(500).json({
                errors: errors.mapped(),
                status: "denied"
            })
        }
    },
    //DELETE
    delete: (req, res) => {
        //delete user
        user.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                userController.deleteImg(req.params.id);
                res.status(200).json({
                    data: result,
                    status: "success"
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: "error deleting user",
                    error: err,
                    status: "denied"
                })
            })
    },
    deleteImg: (userId, imgUrl) => {
        if (userId != false) {
            //find user img filename to delete
            user.findOne({
                attributes: ["url_img"],
                where: {
                    id: userId
                }
            })
                .then(user => {
                    //check if user exists
                    if (user != null) {
                        //delete file upload
                        fs.unlinkSync(path.join(__dirname, `../../public/img/user_img/${user.url_img}`));
                    } else {
                        res.status(500).json({
                            msg: "no user to delete img",
                            status: "denied"
                        })
                    }
                })
                .catch(err => {
                    //error find user
                    res.status(500).json({
                        msg: "error find user to delete img",
                        error: err,
                        status: "denied"
                    })
                })
        } else {
            //delete file upload
            fs.unlinkSync(path.join(__dirname, `../../public/img/user_img/${imgUrl}`));
        }
    }
}

module.exports = userController;