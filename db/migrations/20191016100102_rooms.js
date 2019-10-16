exports.up = function(knex) {
	return knex.schema.createTable("rooms", roomsTable => {
		roomsTable
			.string("name")
			.notNullable()
			.primary();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("rooms");
};
