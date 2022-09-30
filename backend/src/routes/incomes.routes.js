const express = require("express");
const router = express.Router();

const incomesController = require("../controller/incomesController");

//Incomes Routes
//Read
router.get("/", incomesController.listAll);

module.exports = router;
