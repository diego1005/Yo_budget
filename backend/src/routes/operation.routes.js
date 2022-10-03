const express = require("express");
const router = express.Router();

const operationController = require("../controller/operationController");

//Incomes Routes
//Read
router.get("/list", operationController.list);
//Create
router.post("/add", operationController.add);
//Update
router.put("/edit/:id", operationController.edit);
//Delete
router.delete("/delete/:id", operationController.delete);

module.exports = router;
