const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");

//Index Routes
//Home
router.get("/", indexController.home);

module.exports = router;