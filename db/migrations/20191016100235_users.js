exports.up = function(knex) {
	return knex.schema.createTable("users", usersTable => {
		usersTable
			.string("username")
			.notNullable()
			.primary();
		usersTable.string("avatar_url").notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("users");
};
