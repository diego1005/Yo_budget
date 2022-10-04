const express = require("express");
const app = express();
const session = require("express-session");
const cookies = require("cookie-parser");

const indexRouter = require("./src/routes/index.routes");
const userRouter = require("./src/routes/user.routes");
const operationRouter = require("./src/routes/operation.routes");

//Settings
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: "session-secret",
    resave: true,
    saveUninitialized: true
}));
app.use(cookies());

//Routes
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/operation", operationRouter);

//Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})