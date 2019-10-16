exports.getChat = (req, res, next) => {
	res.status(200).json({ "msg": "Welcome to chat" });
};