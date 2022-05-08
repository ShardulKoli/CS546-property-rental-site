const collections = require("../mongoCollections");
const propertiesCollection = collections.properties;
const usersCollection = collections.users;
const { ObjectId } = require("mongodb");
const validations = require("../validation/validations");

async function createProperty(propData) {

    propData = validations.validateProperties(propData);

    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: propData.name.toLowerCase(), isActive: true });

    if (property) {
        throw "Property with provided name already exists!";
    }

    let newProperty = {
        _id: ObjectId(),
        name: propData.name,
        address: propData.address,
        pincode: propData.pincode,
        city: propData.city,
        state: propData.state,
        type: propData.type,
        beds: propData.beds,
        bath: propData.bath,
        balcony: propData.balcony,
        centralAir: propData.centralAir,
        petFriendly: propData.petFriendly,
        partyFriendly: propData.partyFriendly,
        garrage: propData.garrage,
        nearByMedical: propData.nearByMedical,
        nearBySchools: propData.nearBySchools,
        nearByCommute: propData.nearByCommute,
        rent: propData.rent,
        brokerage: propData.brokerage,
        deposit: propData.deposit,
        minimumLeasePeriod: propData.minimumLeasePeriod,
        images: propData.images,
        broker: propData.broker,
        status: false,
        isActive: true
    }

    const insertInfo = await properties.insertOne(newProperty);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw "Could not add property!";

    var prop = await getProperty(newProperty.name);

    return { Property: prop };

}

async function updateProperty(propData) {
    propData = validations.validateProperties(propData);

    const properties = await propertiesCollection();

    var property = await properties.findOne({ _id: ObjectId(propData._id), isActive: true });

    if (!property) {
        throw "Invalid property";
    }

    var updatedProperty = await properties.updateOne({ _id: ObjectId(propData._id) }, {

        $set: {
            name: propData.name,
            address: propData.address,
            pincode: propData.pincode,
            city: propData.city,
            state: propData.state,
            type: propData.type,
            beds: propData.beds,
            bath: propData.bath,
            balcony: propData.balcony,
            centralAir: propData.centralAir,
            petFriendly: propData.petFriendly,
            partyFriendly: propData.partyFriendly,
            garrage: propData.garrage,
            nearByMedical: propData.nearByMedical,
            nearBySchools: propData.nearBySchools,
            nearByCommute: propData.nearByCommute,
            rent: propData.rent,
            brokerage: propData.brokerage,
            deposit: propData.deposit,
            minimumLeasePeriod: propData.minimumLeasePeriod,
            images: propData.images,
            broker: propData.broker
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
    name = validations.validateName(name);

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
    name = validations.validateName(name);

    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: name, isActive: true });

    if (!property)
        throw "Property not found!"

    return property;
}

async function getPropertyById(id) {

    id = validations.validatePropertyId(id);

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
        throw "Could not update to rented out!'";
    }
}


async function removePropertyById(propId) {
    propId = validations.validatePropertyId(propId);

    const properties = await propertiesCollection();

    var property = await properties.findOne({ _id: ObjectId(propId), isActive: true });

    if (!property) {
        throw "Invalid property";
    }

    var updatedProperty = await properties.updateOne({ _id: ObjectId(propId) }, {
        $set: {
            isActive: false
        }
    });

    if (updatedProperty.modifiedCount > 0) {
        //removed successful
        return { isDeleted: true, propertyId: propId, broker: property.broker }

    } else {
        throw "Could not update!";
    }

}


module.exports = {
    getAllProperties,
    createProperty,
    updateProperty,
    removeProperty,
    getProperty,
    getPropertyById,
    markAsRentedOut,
    removePropertyById
}
