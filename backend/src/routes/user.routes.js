const express = require("express");
const router = express.Router();

//Controller
const userController = require("../controller/userController");

//Middlewares
//Multer
const { userUpload } = require("../middlewares/multer/multer");
//Validations
const validates = require("../middlewares/validations/userValidations");
//Confirm Password
const confirmPassword = require("../middlewares/validations/confirmPassword");

//Incomes Routes
//Read
router.get("/list", userController.list);
router.get("/logout", userController.logout);
router.post("/login", validates.validateLogin, userController.login);
//Create
router.post("/signin", userUpload.single("url_img"), validates.validateSignin, userController.signin);
//Update
router.put("/edit/:id", confirmPassword, validates.validateEditUser, userController.editUserData);
router.patch("/editImg/:id", confirmPassword, userUpload.single("url_img"), validates.validateEditUserImg, userController.editUserImg);
router.patch("/editPass/:id", confirmPassword, validates.validateEditUserPass, userController.editUserPassword);
//Delete
router.delete("/delete/:id", confirmPassword, userController.delete);

module.exports = router;