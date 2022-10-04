const multer = require("multer");
const path = require("path");

//USER MULTER SETTINGS
const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        //define folder to storage img
        cb(null, path.join(__dirname, "../../../public/img/user_img"));
    },
    filename: (req, file, cb) => {
        //define file name to storage img
        const filename = `${Date.now()}-user_img-${path.extname(file.originalname)}`
        cb(null, filename);
    }
});

const userUpload = multer({ storage: userStorage });

module.exports = { userUpload }