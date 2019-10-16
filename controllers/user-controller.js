const {
  fetchUser,
  fetchAllUsers,
  updateUser
} = require("../models/user-model");

exports.getUser = (req, res, next) => {
  fetchUser("rogersop");
  res.status(200).json({ msg: "Hey User" });
};

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers();
  res.status(200).json({ msg: "All users" });
};

exports.patchUser = (req, res, next) => {
  const { username } = req.params;
  updateUser("BOB", "roger", "picture3");
  res.status(200).json({ msg: "User Updated" });
};
