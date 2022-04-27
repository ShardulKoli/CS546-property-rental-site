const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const xss = require("xss");


async function signup(req, res) {

    try {
        //check inputs here

        let createdUser = await userData.createUser(xss(req.body.firstName), xss(req.body.lastName), xss(req.body.email), xss(req.body.userType), xss(req.body.contact), xss(req.body.password));

        res.status(200).json({ status: true });
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .post((req, res) => signup(req, res));