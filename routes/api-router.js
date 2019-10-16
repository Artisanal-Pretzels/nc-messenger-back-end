const apiRouter = require("express").Router();
const chatRouter = require("./chat-router");
const userRouter = require("./user-router");

apiRouter.route("/").get((req, res) => {
  res.status(200).json({ msg: "hello" });
});

apiRouter.use("/chat", chatRouter);
apiRouter.use("/user", userRouter);

module.exports = apiRouter;
