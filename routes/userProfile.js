const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const xss = require("xss");


async function showUserDetails(req, res) {

    try {
        //check inputs here
        if (req.session.user) {
            let userDetails = await userData.getUser(xss(req.body.username));
            res.status(200).json({ status: true });
        } else {
            //res.redirect(login)
        }

    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .get((req, res) => showUserDetails(req, res));

module.exports = router;