const collections = require("../mongoCollections");
const usersCollection = collections.users;
const bcrypt = require("bcrypt");
const saltRounds = 12;
const { ObjectId, OrderedBulkOperation } = require("mongodb");
const emailer = require("../autoemailer/autoEmailer");

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

    const users = await usersCollection();

    var user = await users.findOne({ email: email.toLowerCase(), isActive: true });

    if (user) {
        throw "User with provided email already exists!";
    }

    let newUser = {
        _id: ObjectId(),
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        userType: userType === "Student" ? 1 : 2,
        contact: contact,
        password: await bcrypt.hash(password, saltRounds),
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
    const users = await usersCollection();

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
    const users = await usersCollection();

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

    const users = await usersCollection();

    var user = await users.findOne({ email: username.toLowerCase(), isActive: true });

    if (!user)
        throw "User not found!"

    var userObj = user;
    if (user.userType == 1) {
        var studentBookmarkedProperties = []//get propertiesbyid(bookmarkedProp) - should return array of properties with all detials
        var studentRentedProperties = []//get propertiesbyid(rentedProp) -  should return array of properties with all detials
        userObj.bookmarkedPropertyDetails = studentBookmarkedProperties;
        userObj.rentedPropertyDetails = studentRentedProperties;
    } else {
        var brokerOwnedProperties = []//get propertiesbyid(rentedProp) -  should return array of properties with all detials
        userObj.bookmarkedPropertyDetails = brokerOwnedProperties;
    }

    return userObj;
}


//call this while student clicks bookmark/remove from property
async function bookmarkProperty(user, property) {
    //check inputs
    const users = await usersCollection();

    var user = await users.findOne({ email: user.email.toLowerCase(), isActive: true });

    if (!user) {
        throw "Invalid user";
    }

    var propId = property._id.toString();
    user.bookmarkedProp.foreach(x => x._id.toString());

    var bookMarkOperation = {
        $addToSet: {
            bookmarkedProp: property._id
        }
    };

    if (user.bookmarkedProp.includes(propId)) {
        bookMarkOperation = {
            $pull: {
                bookmarkedProp: property._id
            }
        };
    }

    var updatedUser = users.updateOne({ email: user.email.toLowerCase() }, bookMarkOperation);

    if (updatedUser.modifiedCount > 0) {
        return true;
    } else {
        throw "Could not update!";
    }
}

//call this when a broker marks property as rented out to a student
async function rentProperty(broker, student, property) {
    //check inputs
    const users = await usersCollection();

    var brokerUser = await users.findOne({ email: broker.email.toLowerCase(), isActive: true });

    if (!brokerUser) {
        throw "Invalid broker";
    }

    var studentUser = await users.findOne({ email: student.email.toLowerCase(), isActive: true });

    if (!studentUser) {
        throw "Invalid student";
    }

    var propId = property._id.toString();
    studentUser.rentedProp.foreach(x => x._id.toString());

    var rentedOperation = {
        $addToSet: {
            rentedProp: bookmarkFlag
        }
    };

    if (user.bookmarkedProp.includes(propId)) {
        rentedOperation = {
            $pull: {
                rentedProp: bookmarkFlag
            }
        };
    }

    var updatedUser = users.updateOne({ email: user.email.toLowerCase() }, {
        $addToSet: {
            rentedProp: rentedOperation
        }
    });

    if (updatedUser.modifiedCount > 0) {
        return true;
    } else {
        throw "Could not update!";
    }
}


module.exports = {
    login,
    createUser,
    updateUser,
    removeUser,
    getUser,
    bookmarkProperty,

}
