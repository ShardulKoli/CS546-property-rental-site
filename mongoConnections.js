const MongoClient = require("mongodb").MongoClient;
const settings = require("./settings");
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

async function connectToDb() {
  try {
    if (!_connection) {
      _connection = await MongoClient.connect(mongoConfig.serverUrl);
      _db = await _connection.db(mongoConfig.database);
    }
  } catch (error) {
    console.log("Connection Error");
    console.log(error);
  }

  return _db;
}

function closeConnection() {
  _connection.close();
}

module.exports = {
  connectToDb,
  closeConnection,
};
