const collections = require("../mongoCollections");
const usersCollection = collections.users;
const propCollection = collections.properties;
const bcrypt = require("bcrypt");
const saltRounds = 12;
const { ObjectId } = require("mongodb");
const emailer = require("../autoemailer/autoEmailer");
const validation = require("../validation/validations");
const propertyUtils = require("./properties");
const userUtils = require("./properties");


async function verifyPassword(password) {
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


module.exports = {
    verifyPassword,
}