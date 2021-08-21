const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const tasksRouter = require("./routes/tasksRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", tasksRouter);

module.exports = app;
