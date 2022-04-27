const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const xss = require("xss");


async function login(req, res) {

    try {
        //check inputs here

        let user = await userData.login(xss(req.body.username), xss(req.body.password));

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