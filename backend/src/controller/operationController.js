const db = require("../database/models");
const { Operation } = require("../database/models");
const Op = db.Sequelize.Op;


const operationController = {
    //READ
    list: (req, res) => {
        Operation.findAll()
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
        Operation.create({
            //create register on db
            concept: req.body.concept,
            amount: parseFloat(req.body.amount),
            operation_date: req.body.operation_date,
            operation_type: req.body.operation_type,
            id_category: parseInt(req.body.category)
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
        Operation.update(
            {
                //register data to update
                concept: req.body.concept,
                amount: parseFloat(req.body.amount),
                operation_date: req.body.operation_date,
                operation_type: req.body.operation_type,
                id_category: parseInt(req.body.category)
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
        Operation.destroy({
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

module.exports = operationController;