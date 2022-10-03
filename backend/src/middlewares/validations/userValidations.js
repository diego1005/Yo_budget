const { check } = require("express-validations");
const path = require("path");

const validates = {
    //Login validations
    validateLogin: [
        check("name").notEmpty().withMessage("This field is required"),
        check("lastname").notEmpty().withMessage("This field is required"),
        check("email").notEmpty().withMessage("This field is required").bail().isEmail().withMessage("email invalid")
    ],
    //Signin validations
    validateSignin: [
        check("name").notEmpty().withMessage("This field is required"),
        check("lastname").notEmpty().withMessage("This field is required"),
        check("email").notEmpty().withMessage("This field is required").bail().isEmail().withMessage("email invalid"),
        check("password").notEmpty().withMessage("This field is required"),
        check("confirmPassword").notEmpty().withMessage("This field is required").bail().custom((
            confirmPassword, { req }) => {
            if (confirmPassword != req.body.password) throw new Error("Passwords doesn't match")
            else true
        }
        ),
        check("avatar").custom((el, { req }) => {
            const ext = [".jpg", ".png", "jpeg", ".webp"];
            const extFile = path.extname(req.file.originalname);
            return (ext.includes(extFile));
        }).withMessage(`This field requires the following extensions ${ext[0], ext[1], ext[2], ext[3]}`)
    ],
    //Edit validations
    validateEditUser: [
        check("name").notEmpty().withMessage("This field is required"),
        check("lastname").notEmpty().withMessage("This field is required"),
        check("email").notEmpty().withMessage("This field is required").bail().isEmail().withMessage("email invalid"),
        check("avatar").custom((el, { req }) => {
            const ext = [".jpg", ".png", "jpeg", ".webp"];
            const extFile = path.extname(req.file.originalname);
            return (ext.includes(extFile));
        }).withMessage(`This field requires the following extensions ${ext[0], ext[1], ext[2], ext[3]}`)
    ]
}

module.exports = validates;