const { messageData, roomData, userData } = require("../data/index");

exports.seed = function(knex) {
	return knex.migrate
		.rollback()
		.then(() => {
			return knex.migrate.latest();
		})
		.then(() => {
			const messageInsertions = knex("messages").insert(messageData);
			const roomInsertions = knex("rooms").insert(roomData);
			const userInsertions = knex("users").insert(userData);

			return Promise.all([messageInsertions, roomInsertions, userInsertions]);
		})
		.then(() => {
			console.log("All inserted");
		});
};
