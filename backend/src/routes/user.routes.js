const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

//Incomes Routes
//Read
router.get("/list", userController.list);
//Create
router.post("/add", userController.add);
//Update
router.put("/edit/:id", userController.edit);
//Delete
router.delete("/delete/:id", userController.delete);

module.exports = router;