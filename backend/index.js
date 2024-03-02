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
server.use("/files", express.static("files"));
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
  .connect(
    "mongodb+srv://tejaswa1234bedi:tejaswa@cluster0.afezkru.mongodb.net/sarthi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Connection to DB failed !", err);
  });

server.listen(8080, () => {
  console.log("Server started.");
});
