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
    req.body;
    //check inputs here

    let createdProperty = await propertyData.createProperty(
      xss(req.body.name),
      xss(req.body.address),
      xss(req.body.pincode),
      xss(req.body.city),
      xss(req.body.state),
      xss(req.body.type),
      xss(req.body.beds),
      xss(req.body.bath),
      xss(req.body.balcony),
      req.body.centralAir,
      req.body.petFriendly,
      req.body.partyFriendly,
      req.body.garrage,
      xss(req.body.nearBySchools),
      xss(req.body.nearByMedical),
      xss(req.body.nearByCommute),
      xss(req.body.rent),
      xss(req.body.brokerage),
      xss(req.body.deposit),
      xss(req.body.minimumLeasePeriod),
      req.body.images,
      xss(req.body.broker),
      xss(req.body.status)
    );

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function updateProperty(req, res) {
  try {
    //check inputs here

    let updatedProperty = await propertyData.updateProperty(
      xss(req.body.name),
      xss(req.body.address),
      xss(req.body.pincode),
      xss(req.body.city),
      xss(req.body.state),
      xss(req.body.type),
      xss(req.body.beds),
      xss(req.body.bath),
      xss(req.body.balcony),
      req.body.centralAir,
      req.body.petFriendly,
      req.body.partyFriendly,
      req.body.garrage,
      xss(req.body.nearBySchools),
      xss(req.body.nearByMedical),
      xss(req.body.nearByCommute),
      xss(req.body.rent),
      xss(req.body.deposit),
      xss(req.body.minimumLeasePeriod),
      req.body.images,
      xss(req.body.broker),
      xss(req.body.status)
    );

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function removeProperty(req, res) {
  try {
    //check inputs here

    let isRemoved = await propertyData.removeProperty(xss(req.body.name));

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function getProperty(req, res) {
  try {
    //check inputs here

    let property = await propertyData.getPropertyById(req.params.id);

    res.status(200).json(property);
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}

async function bookmarkProp(req, res) {
  try {
    var studentemail = validations.validateEmail(xss(req.body.username));
    var propertyId = validations.validatePropertyId(xss(req.body.propertyId));

    let bookmarkedProp = await userData.bookmarkProperty(studentemail, propertyId);

    res.status(200).json({ status: true });
  } catch (e) {
    res.status(400).json({ errorMessage: e });
  }
}


router.route("/getAllProperties").get((req, res) => getAllProperties(req, res));

router.route("/createProperty").post((req, res) => createProperty(req, res));

router.route("/updateProperty").put((req, res) => updateProperty(req, res));

router.route("/removeProperty").put((req, res) => removeProperty(req, res));

router.route("/getProperty/:id").get((req, res) => getProperty(req, res));

router.route("/bookmark").post((req, res) => bookmarkProp(req, res));

module.exports = router;
