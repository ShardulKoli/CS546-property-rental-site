const collections = require("../mongoCollections");
const usersCollection = collections.users;
const bcrypt = require("bcrypt");
const validation = require("../validation/validations");
const propertyUtils = require("./properties");
const userUtils = require("./users");


async function verifyPassword(password) {
    password = validation.validatePassword(password);

    var users = await usersCollection();

    var user = await users.findOne({
        email: "admin@studyproj.com",
        isActive: true,
    });

    if (user && user.userType == 3) {
        let match = await bcrypt.compare(password, user.password);

        if (!match) throw "Either the username or password is invalid!";

        return true;
    } else {
        throw "Either the username or password is invalid!";
    }
}


async function getInsightsData() {

    var users = await userUtils.getUsersByType('broker');

    var insightsObj = { brokerData: [], cityData: [] };

    for (const broker of users) {
        insightsObj.brokerData.push({
            x: broker.firstName + " " + broker.lastName + "-" + broker.email,
            value: broker.ownedProp.length
        });
    }

    var props = await propertyUtils.getAllProperties();

    let cities = props.map(x => x.city);

    let cityCounter = [];

    for (const city of cities) {
        if (!cityCounter.includes(city)) {
            insightsObj.cityData.push({
                x: city,
                value: cities.filter(x => x === city).length
            });

            cityCounter.push(city);
        }
    }

    return insightsObj;
}

module.exports = {
    verifyPassword,
    getInsightsData
}