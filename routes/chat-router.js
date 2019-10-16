const chatRouter = require("express").Router();
const { getChat } = require("../controllers/chat-controller");
const { saveMessages } = require("../controllers/message-controller");

chatRouter.route("/").get(getChat);
chatRouter.route("/:room/messages").get(saveMessages);



module.exports = chatRouter;