const express = require("express");
const router = express.Router();

const expensesController = require("../controller/expensesController");

//Expenses Routes
//Read
router.get("/", expensesController.listAll);

module.exports = router;