const db = require("../database/models");
const { User } = require("../database/models");
const Op = db.Sequelize.Op;


const userController = {
    //LOGIN
    login: (req, res) => {
        //form fields validation
        //validation pass
        //user search
        //user find
        //compare password
        //password pass
        //user in session
        //remember me checkbox
        //password wrong
        //user don't exist
        //validation errors
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
    //CREATE
    add: (req, res) => {
        User.create({
            //create register on db
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            // url_img: req.file.img
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
                // url_img: req.file.img
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