const connection = require("../db/connection");

exports.fetchMessages = room => {
  return connection
    .select("*").from("messages").where({ room: room }).then(message => { console.log("this is the message"); console.log(message); });
}