const apiRouter = require("express").Router();
const chatRouter = require("./chat-router");

apiRouter.route("/").get((req, res) => {
	res.status(200).json({ "msg": "hello" });
});

apiRouter.use("/chat", chatRouter);


module.exports = apiRouter;