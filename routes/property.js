const express = require("express");
const router = express.Router();
const propertyData = require("../data/properties");
const xss = require("xss");


async function getAllProperties(req,res){
    try{
    let properties = await propertyData.getAllProperties();

    res.status(200).json(properties);
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

async function createProperty(req, res) {

    try {
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
            xss(req.body.centralAir),
            xss(req.body.petFriendly),
            xss(req.body.partyFriendly),
            xss(req.body.garrage),
            xss(req.body.nearBySchools),
            xss(req.body.nearByMedical),
            xss(req.body.nearByCommute),
            xss(req.body.rent),
            xss(req.body.deposit),
            xss(req.body.minimumLeasePeriod),
            xss(req.body.images),
            xss(req.body.broker),
            xss(req.body.status),
            );

        res.status(200).json({ status: true });
    }
    catch (e) {
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
            xss(req.body.centralAir),
            xss(req.body.petFriendly),
            xss(req.body.partyFriendly),
            xss(req.body.garrage),
            xss(req.body.nearBySchools),
            xss(req.body.nearByMedical),
            xss(req.body.nearByCommute),
            xss(req.body.rent),
            xss(req.body.deposit),
            xss(req.body.minimumLeasePeriod),
            xss(req.body.images),
            xss(req.body.broker),
            xss(req.body.status),
            );

        res.status(200).json({ status: true });
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}


async function removeProperty(req, res) {

    try {
        //check inputs here

        let isRemoved = await propertyData.removeProperty(xss(req.body.name));

        res.status(200).json({ status: true });
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/getAllProperties")
    .get((req, res) => getAllProperties(req, res));

router
    .route("/createProperty")
    .post((req, res) => createProperty(req, res));

router
.route("/updateProperty")
.put((req, res) => updateProperty(req, res));

router
    .route("/removeProperty")
    .put((req, res) => removeProperty(req, res));
    

module.exports = router;