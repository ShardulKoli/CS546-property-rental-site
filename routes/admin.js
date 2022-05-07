const express = require("express");
const router = express.Router();
const adminData = require("../data/admin");
const xss = require("xss");
const path = require("path");
const propertyUtils = require("../data/properties");
const userUtils = require("../data/users");
const validation = require("../validation/validations");

async function index(req, res) {

    try {
        return res.sendFile(path.resolve("adminPanel/admin.html"));
    }
    catch (e) {
        return res.json({ errorMessage: e });
    }
}

async function verifyUser(req, res) {

    try {
        passWord = validation.validatePassword(xss(req.body.password));

        let verified = await adminData.verifyPassword(passWord);

        return res.json({ status: verified });
    }
    catch (e) {
        return res.json({ status: false, errorMessage: e });
    }
}

async function getUsers(req, res) {
    try {

        var userType = validation.validateUserType(xss(req.params.type));

        let users = await userUtils.getUsersByType(userType);

        return res.json({ users: users, status: true });
    } catch (error) {
        return res.json({ status: false, errorMessage: error });
    }
}

async function getProperties(req, res) {
    try {

        let props = await propertyUtils.getAllProperties();

        return res.json({ properties: props, status: true });
    } catch (error) {
        return res.json({ status: false, errorMessage: error });
    }
}

async function getUser(req, res) {
    try {
        email = validation.validateEmail(xss(req.params.username));

        let user = await userUtils.getUser(email);

        return res.json({ user: user, status: true });
    } catch (error) {
        return res.json({ status: false, errorMessage: error });
    }
}

async function removeUser(req, res) {
    try {
        let email = validation.validateEmail(xss(req.params.username));

        let removedUser = await userUtils.removeUser(email);

        return res.json({ status: true });

    } catch (error) {
        res.status(400).json({ status: false, errorMessage: error });
    }
}

router.route("/").get((req, res) => index(req, res));

router.route("/").post((req, res) => verifyUser(req, res));

router.route("/getUsers/:type").get((req, res) => getUsers(req, res));

router.route("/getProperties").get((req, res) => getProperties(req, res));

router.route("/getUser/:username").get((req, res) => getUser(req, res));

router.route("/removeUser/:username").delete((req, res) => removeUser(req, res));



module.exports = router;