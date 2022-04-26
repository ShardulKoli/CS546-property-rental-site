const express = require("express");
const router = express.Router();
const userData = require("../data/users");

async function loginPage(req, res) {
    //render login form/ page
}

async function login(req, res) {

    try {
        //check inputs here

        let checkLoginRequest = await userData.login(req.body.username, req.body.password);

        //render logged in user view with required data
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .get((req, res) => loginPage(req, res))
    .post((req, res) => login(req, res));