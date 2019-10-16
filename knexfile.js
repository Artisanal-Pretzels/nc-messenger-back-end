const dbConfig = {
	client: "pg",
	connection: {
		database: "nc_messenger_test",
		username: "oem",
		password: "password"
	},
	seeds: {
		directory: "./db/seeds"
	},
	migrations: {
		directory: "./db/migrations"
	}
};

module.exports = dbConfig;
