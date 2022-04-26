const MongoClient = require('mongoose').MongoClient;
const settings = require('./settings');
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;


async function connectToDb() {
    if (!_connection) {
        _connection = await MongoClient.connect(mongoConfig.serverUrl);
        _db = await _connection.db(mongoConfig.database);
    }

    return _db;
}

function closeConnection() {
    _connection.close();
}

module.exports = {
    connectToDb,
    closeConnection
};