const express = require("express");
const router = express.Router();

const incomesController = require("../controller/incomesController");

//Incomes Routes
//Read
router.get("/list", incomesController.list);
//Create
router.post("/add", incomesController.add);
//Update
router.put("/edit/:id", incomesController.edit);
//Delete
router.delete("/delete/:id", incomesController.delete);

module.exports = router;
