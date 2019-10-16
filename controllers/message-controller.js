const { fetchMessages } = require("../models/message-model");

exports.saveMessages = (req, res) => {
  fetchMessages("cooljmessy");
  res.send(200).json({ "message": "100 pushups" });
};