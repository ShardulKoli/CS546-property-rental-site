const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const xss = require("xss");
const validation = require("../validation/validations");


async function signup(req, res) {

    try {
        //check inputs here
        let fname = validation.validateFirstName(xss(req.body.firstName));
        let lname = validation.validateLastName(xss(req.body.lastName));
        let email = validation.validateEmail(xss(req.body.email));
        let userType = validation.validateUserType(xss(req.body.userType));
        let contact = validation.validateContact(xss(req.body.contact));
        let password = validation.validatePassword(xss(req.body.password));

        let createdUser = await userData.createUser(fname, lname, email, userType, contact, password);

        res.status(200).json({ status: true });
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .post((req, res) => signup(req, res));

module.exports = router;