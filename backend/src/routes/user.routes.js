const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

//Incomes Routes
//Read
router.get("/list", userController.list);
router.get("/logout", userController.logout);
router.post("/login", userController.login);
//Create
router.post("/signin", userController.signin);
//Update
router.put("/edit/:id", userController.edit);
//Delete
router.delete("/delete/:id", userController.delete);

module.exports = router;