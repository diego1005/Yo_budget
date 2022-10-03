const db = require("../database/models");
const { User } = require("../database/models");
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");


const userController = {
    //LOGIN
    login: (req, res) => {
        //form fields validations
        const errors = validationResult(req);
        //validations pass
        if (errors.isEmpty()) {
            //user search
            User.findOne({
                where: {
                    email: req.body.username
                }
            })
                .then(user => {
                    //user find
                    if (user != null) {
                        //compare password
                        let authPass = bcrypt.compareSync(req.body.password, user.password);
                        delete user.password;
                        //password pass
                        if (authPass) {
                            //user in session
                            req.session.userLogged = user.email;
                            //remember me checkbox
                            if (req.body.remember != undefined) {
                                res.cookie("remember", user.email, { maxAge: 1000 * 60 * 2 });
                            }
                            res.status(200).json({
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
            User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    //user existent
                    if (user != null) {
                        res.status(500).json({
                            msg: "Email already exists",
                            old: req.body,
                            status: "denied"
                        })
                    } else {
                        //new user
                        User.create({
                            //CREATE register on db
                            name: req.body.name,
                            lastname: req.body.lastname,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            // url_img: req.file.filename
                        })
                            .then(result => {
                                delete user.password;
                                //user in session
                                req.session.userLogged = user.email;
                                res.status(200).json({
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
                    }
                })
                .catch(err => {
                    res.status(500).json({
                        error: err,
                        status: "denied"
                    })
                })
        } else {
            //validations with errors
            res.status(500).json({
                errors: errors.mapped(),
                old: req.body,
                status: "denied"
            })
        }
    },
    //READ
    list: (req, res) => {
        User.findAll()
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
    //UPDATE
    edit: (req, res) => {
        User.update(
            {
                //register data to update
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                // url_img: req.file.filename
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
                    error: err,
                    status: "denied"
                })
            })
    },
    //DELETE
    delete: (req, res) => {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.status(200).json({
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
    }
}

module.exports = userController;