const collections = require("../mongoCollections");
const usersCollection = collections.users;
const bcrypt = require("bcrypt");
const saltRounds = 12;
const { ObjectId } = require("mongodb");
const emailer = require

async function login(username, password) {

    //check inputs

    var users = await usersCollection();

    var user = await users.findOne({ email: username.toLowerCase(), isActive: true });

    if (user) {
        let match = await bcrypt.compare(password, user.password);

        if (!match)
            throw "Either the username or password is invalid!";

        return user;
        //return user with necessary data -- student data / broker data           
    } else {
        throw "Either the username or password is invalid!";
    }

}

async function createUser(firstName, lastName, email, userType, contact, password) {
    //check all inputs

    const users = await userCollection();

    var user = await users.findOne({ email: username.toLowerCase(), isActive: true });

    if (user) {
        throw "User with provided email already exists!";
    }

    let newUser = {
        _id: ObjectId(),
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        userType: userType,
        contact: contact,
        password: await bcrypt.hash(password, saltRounds),
        username: username.toLowerCase(),
        bookmarkedProp: [],
        rentedProp: [],
        ownedProp: [],
        isActive: true
    }

    const insertInfo = await users.insertOne(newUser);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw "Could not add user!";

    var insertedUser = await getUser(newUser.email);
    insertedUser.password = password;

    try {
        emailer.sendAccoutConfirmationEmail(insertedUser);
    } catch (error) {
        console.log(error);
    }
    //return data if needed
}

async function updateUser(firstName, lastName, username, contact) {

    //check inputs
    const users = await userCollection();

    var user = await users.findOne({ email: username.toLowerCase(), isActive: true });

    if (!user) {
        throw "Invalid user";
    }

    var updatedUser = users.updateOne({ email: username.toLowerCase() }, {
        $set: {
            firstName: firstName,
            lastName: lastName,
            contact: contact
        }
    });

    if (updatedUser.modifiedCount > 0) {
        //update successful
    } else {
        throw "Could not update!";
    }

}

async function removeUser(username) {
    //check inputs
    const users = await userCollection();

    var user = await users.findOne({ email: username.toLowerCase(), isActive: true });

    if (!user) {
        throw "Invalid user";
    }

    var updatedUser = users.updateOne({ email: username.toLowerCase() }, {
        $set: {
            isActive: false
        }
    });

    if (updatedUser.modifiedCount > 0) {
        //removed successful
    } else {
        throw "Could not update!";
    }

}

async function getUser(username) {
    //check username input

    const users = await userCollection();

    var user = await users.findOne({ email: username.toLowerCase(), isActive: true });

    if (!user)
        throw "User not found!"

    

    return user;

}


module.exports = {
    login,
    createUser,
    updateUser,
    removeUser,
    getUser
}
