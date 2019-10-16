const dbConfig = {
	client: "pg",
	connection: {
		database: "nc_messenger_test"
	},
	seeds: {
		directory: "./db/seeds"
	},
	migrations: {
		directory: "./db/migrations"
	}
};

module.exports = dbConfig;
