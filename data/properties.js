const collections = require("../mongoCollections");
const propertiesCollection = collections.properties;
const usersCollection = collections.users;
const bcrypt = require("bcrypt");
const saltRounds = 12;
const { ObjectId } = require("mongodb");
const validations = require("../validation/validations");
//const emailer = require("../autoemailer/autoEmailer");

async function createProperty(name, address, pincode, city, state, type, beds, bath, balcony, centralAir,
    petFriendly, partyFriendly, garrage, nearBySchools, nearByMedical, nearByCommute, rent, brokerage,
    deposit, minimumLeasePeriod, images, broker, status) {
    //check all inputs
    //status field indicates rented or not!

    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: name.toLowerCase(), isActive: true });

    if (property) {
        throw "Property with provided name already exists!";
    }

    let newProperty = {
        _id: ObjectId(),
        name: name,
        address: address,
        pincode: pincode,
        city: city,
        state: state,
        type: type,
        beds: beds,
        bath: bath,
        balcony: balcony,
        centralAir: centralAir,
        petFriendly: petFriendly,
        partyFriendly: partyFriendly,
        garrage: garrage,
        nearByMedical: nearByMedical,
        nearBySchools: nearBySchools,
        partyFriendly: partyFriendly,
        partyFriendly: partyFriendly,
        nearByCommute: nearByCommute,
        rent: rent,
        brokerage: brokerage,
        deposit: deposit,
        minimumLeasePeriod: minimumLeasePeriod,
        images: images,
        broker: broker,
        status: status,
        isActive: true
    }

    const insertInfo = await properties.insertOne(newProperty);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw "Could not add property!";

    //insertedUser.password = password;

    try {
        var insertedUser = await getProperty(newProperty.name);

        return { Property: insertedUser };

    } catch (error) {
        console.log(error);
    }
    //return data if needed
}

async function updateProperty(name, address, pincode, city, state, type, beds, bath, balcony, centralAir,
    petFriendly, partyFriendly, garrage, nearBySchools, nearByMedical, nearByCommute, rent, brokerage,
    deposit, minimumLeasePeriod, images, broker, status) {

    //check inputs
    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: name, isActive: true });

    if (!property) {
        throw "Invalid property";
    }

    var updatedProperty = await properties.updateOne({ name: name }, {
        $set: {
            address: address,
            pincode: pincode,
            city: city,
            state: state,
            type: type,
            beds: beds,
            bath: bath,
            balcony: balcony,
            centralAir: centralAir,
            petFriendly: petFriendly,
            partyFriendly: partyFriendly,
            garrage: garrage,
            nearByMedical: nearByMedical,
            nearBySchools: nearBySchools,
            partyFriendly: partyFriendly,
            partyFriendly: partyFriendly,
            nearByCommute: nearByCommute,
            rent: rent,
            brokerage: brokerage,
            deposit: deposit,
            minimumLeasePeriod: minimumLeasePeriod,
            images: images,
            broker: broker,
            status: status,
        }
    });

    if (updatedProperty.modifiedCount > 0) {
        //update successful
        return { isUpdated: true }
    } else {
        throw "Could not update!";
    }

}

async function getAllProperties() {
    const properties = await propertiesCollection();
    const propertiesList = await properties.find({ isActive: true }).toArray();

    if (!propertiesList)
        throw "Not found!"
    return propertiesList;
}

async function removeProperty(name) {
    //check inputs
    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: name, isActive: true });

    if (!property) {
        throw "Invalid property";
    }

    var updatedProperty = await properties.updateOne({ name: name }, {
        $set: {
            isActive: false
        }
    });

    if (updatedProperty.modifiedCount > 0) {
        //removed successful
        return { isDeleted: true, propertyId: property._id.toString(), broker: property.broker }
    } else {
        throw "Could not update!";
    }

}

async function getProperty(name) {
    //check username input

    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: name, isActive: true });

    if (!property)
        throw "Property not found!"



    return property;

}
async function getPropertyById(id) {
    //check username input

    const properties = await propertiesCollection();
    const property = await properties.findOne({ _id: ObjectId(id) });

    if (!property)
        throw "Property not found!";

    return property;

}

async function markAsRentedOut(brokerEmail, propertyId) {
    brokerEmail = validations.validateEmail(brokerEmail);
    propertyId = validations.validatePropertyId(propertyId);

    const properties = await propertiesCollection();
    var property = await properties.findOne({ _id: ObjectId(propertyId) });

    if (!property)
        throw "Property not found!";

    const users = await usersCollection();

    var user = await users.findOne({
        email: brokerEmail.toLowerCase(),
        isActive: true,
    });

    if (!user) {
        throw "Invalid user";
    }

    if (property.broker.toLowerCase() !== brokerEmail.toLowerCase())
        throw `This property does not belong to broker ${brokerEmail}`;

    var markAsRentedOutOperation = {
        $set: {
            status: true
        }
    };

    if (property.status) {
        markAsRentedOutOperation = {
            $set: {
                status: false
            }
        }
    }

    var updatedProperty = await properties.updateOne({ _id: ObjectId(propertyId) }, markAsRentedOutOperation);

    if (updatedProperty.modifiedCount > 0) {
        return true;
    } else {
        throw "Could not update to rented out!";
    }
}


module.exports = {
    getAllProperties,
    createProperty,
    updateProperty,
    removeProperty,
    getProperty,
    getPropertyById,
    markAsRentedOut
}
