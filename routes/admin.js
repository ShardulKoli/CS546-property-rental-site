const express = require("express");
const router = express.Router();
const adminData = require("../data/admin");
const xss = require("xss");
const path = require("path");
const propertyUtils = require("../data/properties");
const userUtils = require("../data/users");

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
        passWord = xss(req.body.password)

        let verified = await adminData.verifyPassword(passWord);

        return res.json({ status: verified });
    }
    catch (e) {
        return res.json({ status: false, errorMessage: e });
    }
}

async function getUsers(req, res) {
    try {
        var userType = xss(req.params.type);

        let users = await userUtils.getUsersByType(userType);

        return res.json({ users: users });
    } catch (error) {
        return res.json({ errorMessage: error });
    }
}

router.route("/").get((req, res) => index(req, res));

router.route("/").post((req, res) => verifyUser(req, res));

router.route("/:type").get((req, res) => getUsers(req, res));


module.exports = router;