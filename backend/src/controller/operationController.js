const db = require("../database/models");
const { operation } = require("../database/models");
const Op = db.Sequelize.Op;


const operationController = {
    //READ
    list: (req, res) => {
        operation.findAll()
            .then(result => {
                res.status(200).json({
                    count: result.length,
                    data: result,
                    status: "success"
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: "error from find",
                    error: err,
                    status: "denied"
                })
            })
    },
    listTheLasts: (req, res) => {
        const limit = parseInt(req.params.limit);
        operation.findAll(
            {
                limit
            })
            .then(result => {
                res.status(200).json({
                    count: result.lenghth,
                    data: result,
                    status: "success"
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: "error from find",
                    error: err,
                    status: "denied"
                })
            })
    },
    bring: (req, res) => {
        const id = parseInt(req.params.id)
        operation.findByPk(id)
            .then(result => {
                res.status(200).json({
                    data: result,
                    status: "success"
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: "error to find operation",
                    error: err,
                    status: "denied"
                })
            })
    },
    //CREATE
    add: (req, res) => {
        operation.create({
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
        const id = parseInt(req.params.id);
        operation.update(
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
                    id: id
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
        const id = parseInt(req.params.id);
        operation.destroy({
            where: {
                id: id
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