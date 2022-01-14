const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();


connectMongoDb();

var connectionAttempt = 0;
var Database;

mongoose.connection.on("error", function (err) {
	console.trace("Mongodb connection failed ❌", err);
	if (connectionAttempt == process.env.DB_CONNECTION_RETTEMPT_LIMIT_NODE || 1) {
		
		console.log("Intilizing connection");
	} else {
		connectionAttempt++;
		connectMongoDb();
	}
});

mongoose.connection.on("connected", function (success) {
	console.log("Successfully opened mongodb connection 👍🏻");
	connectionAttempt = 0;
});

function connectMongoDb() {
	console.log(process.env.MONGO_URL)
	mongoose.connect(
		 process.env.MONGO_URL,
		 { useNewUrlParser: true, useUnifiedTopology: true },
		(err) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("Database successfully connected ✅");
		}
	);
}

module.exports = connectMongoDb