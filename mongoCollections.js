const dbConnection = require('./mongoConnections');

function getCollectionFn(collection) {
    let _col = undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection.connectToDb();
            _col = await db.collection(collection);
        }

        return _col;
    };
};

module.exports = {
    users: getCollectionFn('users'),
    properties: getCollectionFn('properties')
};