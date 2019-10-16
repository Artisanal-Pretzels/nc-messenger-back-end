exports.up = function(knex) {
	return knex.schema.createTable("messages", messagesTable => {
		messagesTable.increments("message_id");
		messagesTable.string("room").notNullable();
		messagesTable.string("body").notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("messages");
};
