const express = require("express");
const router = express.Router();

//Controller
const operationController = require("../controller/operationController");

//Middlewares
//Token
const verifyToken = require("../middlewares/session/verifyToken");

//Incomes Routes
//Read
router.get("/list", operationController.list);
router.get("/listTheLasts/:offset", operationController.listTheLasts);
router.get("/find/:id", operationController.bring)
//Create
router.post("/add", operationController.add);
//Update
router.put("/edit/:id", operationController.edit);
//Delete
router.delete("/delete/:id", operationController.delete);

module.exports = router;
