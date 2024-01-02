const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const companyRouter = require("./routes/Company");
const noticeRouter = require("./routes/Notice");
const userRouter = require("./routes/User");
const authRouter = require("./routes/Auth");
const userAppliedRouter = require("./routes/UserApplied");

const server = express();

//Middlewares
server.use(cors());
server.use(express.json());
server.use("/companyList", companyRouter.router);
server.use("/notices", noticeRouter.router);
server.use("/users", userRouter.router);
server.use("/auth", authRouter.router);
server.use("/applied", userAppliedRouter.router);

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/sarthi")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Connection to DB failed !", err);
  });

server.listen(8080, () => {
  console.log("Server started.");
});
