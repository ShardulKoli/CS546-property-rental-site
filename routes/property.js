const express = require("express");
const router = express.Router();
const propertyData = require("../data/properties");
const xss = require("xss");
const validations = require("../validation/validations");
const userData = require("../data/users");

async function getAllProperties(req, res) {
  try {
    let properties = await propertyData.getAllProperties();

    res.status(200).json(properties);
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function createProperty(req, res) {
  try {

    var images = [];

    req.body.images.forEach(x => {
      images.push(xss(x));
    });

    let centralA = xss(req.body.centralAir);
    let petF = xss(req.body.petFriendly);
    let partyF = xss(req.body.partyFriendly);
    let garage = xss(req.body.garrage);

    var propData = {
      name: xss(req.body.name),
      address: xss(req.body.address),
      pincode: xss(req.body.pincode),
      city: xss(req.body.city),
      state: xss(req.body.state),
      type: xss(req.body.type),
      beds: xss(req.body.beds),
      bath: xss(req.body.bath),
      balcony: xss(req.body.balcony),
      centralAir: centralA === "Y" ? true : false,
      petFriendly: petF === "Y" ? true : false,
      partyFriendly: partyF === "Y" ? true : false,
      garrage: garage == "Y" ? true : false,
      nearBySchools: xss(req.body.nearBySchools),
      nearByMedical: xss(req.body.nearByMedical),
      nearByCommute: xss(req.body.nearByCommute),
      rent: xss(req.body.rent),
      brokerage: xss(req.body.brokerage),
      deposit: xss(req.body.deposit),
      minimumLeasePeriod: xss(req.body.minimumLeasePeriod),
      broker: xss(req.body.broker),
      images: images
    };

    var propData = validations.validateProperties(propData);

    let createdProperty = await propertyData.createProperty(propData);

    let addPropertyToBroker = await userData.addPropertyAsOwnedByBroker(
      createdProperty.Property.broker,
      createdProperty.Property._id.toString()
    );

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function updateProperty(req, res) {
  try {
    var images = [];

    req.body.images.forEach(x => {
      images.push(xss(x));
    });

    let centralA = xss(req.body.centralAir);
    let petF = xss(req.body.petFriendly);
    let partyF = xss(req.body.partyFriendly);
    let garage = xss(req.body.garrage);

    var propData = {
      _id: xss(req.params.id),
      name: xss(req.body.name),
      address: xss(req.body.address),
      pincode: xss(req.body.pincode),
      city: xss(req.body.city),
      state: xss(req.body.state),
      type: xss(req.body.type),
      beds: xss(req.body.beds),
      bath: xss(req.body.bath),
      balcony: xss(req.body.balcony),
      centralAir: centralA === "Y" ? true : false,
      petFriendly: petF === "Y" ? true : false,
      partyFriendly: partyF === "Y" ? true : false,
      garrage: garage == "Y" ? true : false,
      nearBySchools: xss(req.body.nearBySchools),
      nearByMedical: xss(req.body.nearByMedical),
      nearByCommute: xss(req.body.nearByCommute),
      rent: xss(req.body.rent),
      brokerage: xss(req.body.brokerage),
      deposit: xss(req.body.deposit),
      minimumLeasePeriod: xss(req.body.minimumLeasePeriod),
      broker: xss(req.body.broker),
      images: images
    };

    var propData = validations.validateProperties(propData);

    let updatedProperty = await propertyData.updateProperty(propData);

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function removeProperty(req, res) {
  try {
    propname = validations.validateName(xss(req.body.name));

    let isRemoved = await propertyData.removeProperty(propname);

    let removeOwnedFromBroker = await userData.addPropertyAsOwnedByBroker(
      isRemoved.broker,
      isRemoved.propertyId
    );

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function getProperty(req, res) {
  try {
    propId = validations.validatePropertyId(xss(req.params.id))

    let property = await propertyData.getPropertyById(propId);

    res.status(200).json(property);
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function bookmarkProp(req, res) {
  try {
    var studentemail = validations.validateEmail(xss(req.body.username));
    var propertyId = validations.validatePropertyId(xss(req.body.propertyId));

    let bookmarkedProp = await userData.bookmarkProperty(
      studentemail,
      propertyId
    );

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function showInterestInProperty(req, res) {
  try {
    var studentemail = validations.validateEmail(xss(req.body.username));
    var brokeremail = validations.validateEmail(xss(req.body.broker));
    var propertyId = validations.validatePropertyId(xss(req.body.propertyId));

    let interestedProperty = await userData.showInterestInProperty(
      studentemail,
      brokeremail,
      propertyId
    );

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function markPropertyAsRentedOut(req, res) {
  try {
    var brokeremail = validations.validateEmail(xss(req.body.username));
    var propertyId = validations.validatePropertyId(xss(req.body.propertyId));

    let rentedOutProp = await propertyData.markAsRentedOut(
      brokeremail,
      propertyId
    );

    res.status(200).json({ status: rentedOutProp });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

router.route("/getAllProperties").get((req, res) => getAllProperties(req, res));

router.route("/createProperty").post((req, res) => createProperty(req, res));

router.route("/updateProperty/:id").put((req, res) => updateProperty(req, res));

router.route("/removeProperty").put((req, res) => removeProperty(req, res));

router.route("/getProperty/:id").get((req, res) => getProperty(req, res));

router.route("/bookmark").post((req, res) => bookmarkProp(req, res));

router.route("/showInterestInProperty").post((req, res) => showInterestInProperty(req, res));

router.route("/markPropertyAsRentedOut").post((req, res) => markPropertyAsRentedOut(req, res));

module.exports = router;
