const { check } = require("express-validator");
const path = require("path");

const validates = {
    //Login validations
    validateLogin: [
        check("username").notEmpty().withMessage("This field is required").bail().isEmail().withMessage("email invalid"),
        check("password").notEmpty().withMessage("This field is required")
    ],
    //Signin validations
    validateSignin: [
        check("name").notEmpty().withMessage("This field is required"),
        check("lastname").notEmpty().withMessage("This field is required"),
        check("email").notEmpty().withMessage("This field is required").bail().isEmail().withMessage("email invalid"),
        check("password").notEmpty().withMessage("This field is required"),
        check("confirmPassword").notEmpty().withMessage("This field is required").bail().custom((
            confirmPassword, { req }) => {
            if (confirmPassword != req.body.password) {
                throw new Error("Passwords doesn't match")
            } else {
                return true;
            }
        }),
        check("url_img").custom((el, { req }) => {
            const ext = [".jpg", ".png", "jpeg", ".webp"];
            const extFile = path.extname(req.file.originalname);
            return (ext.includes(extFile));
        }).withMessage('This field requires the following extensions .jpg, .png, .jpeg, .webp')
    ],
    //Edit validations
    validateEditUser: [
        check("name").notEmpty().withMessage("This field is required"),
        check("lastname").notEmpty().withMessage("This field is required"),
        check("email").notEmpty().withMessage("This field is required").bail().isEmail().withMessage("email invalid")
    ],
    validateEditUserImg: [
        check("url_img").custom((el, { req }) => {
            const ext = [".jpg", ".png", "jpeg", ".webp"];
            const extFile = path.extname(req.file.originalname);
            return (ext.includes(extFile));
        }).withMessage('This field requires the following extensions .jpg, .png, .jpeg, .webp')
    ],
    validateEditUserPass: [
        check("oldPassword").notEmpty().withMessage("This field is required"),
        check("password").notEmpty().withMessage("This field is required"),
        check("confirmPassword").notEmpty().withMessage("This field is required").bail().custom((
            confirmPassword, { req }) => {
            if (confirmPassword != req.body.password) {
                throw new Error("Passwords doesn't match")
            } else {
                return true;
            }
        })
    ]
}

module.exports = validates;