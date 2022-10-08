const express = require("express");
const app = express();
const cors = require("cors");

const indexRouter = require("./src/routes/index.routes");
const userRouter = require("./src/routes/user.routes");
const operationRouter = require("./src/routes/operation.routes");

const userToken = require("./src/middlewares/session/userToken");

//Settings
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use("/", indexRouter);
app.use("/user", userToken, userRouter);
app.use("/operation", userToken, operationRouter);

//Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})