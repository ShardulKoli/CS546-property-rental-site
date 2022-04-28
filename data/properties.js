const collections = require("../mongoCollections");
const propertiesCollection = collections.properties;
const bcrypt = require("bcrypt");
const saltRounds = 12;
const { ObjectId } = require("mongodb");
//const emailer = require("../autoemailer/autoEmailer");

async function createProperty(name, address, pincode, city, state,type,beds,bath,balcony,centralAir,
    petFriendly,partyFriendly,garrage,nearBySchools,nearByMedical,nearByCommute,rent,brokerage,
    deposit,minimumLeasePeriod,images,broker,status) {
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
        beds:beds,
        bath:bath,
        balcony:balcony,
        centralAir:centralAir,
        petFriendly:petFriendly,
        partyFriendly:partyFriendly,
        garrage:garrage,
        nearByMedical:nearByMedical,
        nearBySchools:nearBySchools,
        partyFriendly:partyFriendly,
        partyFriendly:partyFriendly,
        nearByCommute:nearByCommute,
        rent:rent,
        brokerage:brokerage,
        deposit:deposit,
        minimumLeasePeriod:minimumLeasePeriod,
        images:images,
        broker:broker,
        status:status,
        isActive: true
    }

    const insertInfo = await properties.insertOne(newProperty);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw "Could not add property!";

    
    //insertedUser.password = password;

    try {
    var insertedUser = await getProperty(newProperty.name);

     return {Property:insertedUser};

    } catch (error) {
        console.log(error);
    }
    //return data if needed
}

async function updateProperty(name, address, pincode, city, state,type,beds,bath,balcony,centralAir,
    petFriendly,partyFriendly,garrage,nearBySchools,nearByMedical,nearByCommute,rent,brokerage,
    deposit,minimumLeasePeriod,images,broker,status) {

    //check inputs
    const properties = await propertiesCollection();

    var property = await properties.findOne({ name: name, isActive: true });

    if (!property) {
        throw "Invalid property";
    }

    var updatedProperty = users.updateOne({ name: name}, {
        $set: {
        address: address,
        pincode: pincode,
        city: city,
        state: state,
        type: type,
        beds:beds,
        bath:bath,
        balcony:balcony,
        centralAir:centralAir,
        petFriendly:petFriendly,
        partyFriendly:partyFriendly,
        garrage:garrage,
        nearByMedical:nearByMedical,
        nearBySchools:nearBySchools,
        partyFriendly:partyFriendly,
        partyFriendly:partyFriendly,
        nearByCommute:nearByCommute,
        rent:rent,
        brokerage:brokerage,
        deposit:deposit,
        minimumLeasePeriod:minimumLeasePeriod,
        images:images,
        broker:broker,
        status:status,
        }
    });

    if (updatedProperty.modifiedCount > 0) {
        //update successful
        return {isUpdated:true}
    } else {
        throw "Could not update!";
    }

}

async function getAllProperties(){
    const properties = await propertiesCollection();

    if (!properties)
        throw "Not found!"
}

async function removeProperty(name) {
    //check inputs
    const properties = await propertiesCollection();

    var property = await properties.findOne({ name:name, isActive: true });

    if (!property) {
        throw "Invalid property";
    }

    var updatedProperty = properties.updateOne({ name:name }, {
        $set: {
            isActive: false
        }
    });

    if (updatedProperty.modifiedCount > 0) {
        //removed successful
        return {isDeleted :true}
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


module.exports = {
    getAllProperties,
    createProperty,
    updateProperty,
    removeProperty,
    getProperty
}
