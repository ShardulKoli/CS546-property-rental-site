const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const xss = require("xss");
const validation = require("../validation/validations");


async function login(req, res) {

    try {
        
        let email = validation.validateEmail(xss(req.body.username));
        let password = validation.validatePassword(xss(req.body.password));

        let user = await userData.login(email, password);

        req.session.user = { username: user.email, userType: user.userType, name: user.firstName + " " + user.lastName };

        res.status(200).json(req.session.user);

    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .post((req, res) => login(req, res));

module.exports = router;