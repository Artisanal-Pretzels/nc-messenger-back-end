const connection = require("../db/connection");

exports.fetchUser = username => {
  return connection
    .first("*")
    .from("users")
    .where({ username: username })
    .then(user => {
      console.log("hi");
      console.log(user);
    });
};

exports.fetchAllUsers = () => {
  return connection
    .select("*")
    .from("users")
    .then(users => {
      console.log("all Users");
      console.log(users);
    });
};

exports.updateUser = (username, newUsername, newAvatar_url) => {
  return connection
    .from("users")
    .where({ username: username })
    .update({ username: newUsername, avatar_url: newAvatar_url })
    .then(newUser => {
      console.log("working?");
      console.log(newUser);
    });
};
