const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const xss = require("xss");
const validation = require("../validation/validations");


async function showUserDetails(req, res) {

    try {
        if (req.session.user) {
            let username = validation.validateEmail(xss(req.body.username))
            let userDetails = await userData.getUser(username);
            res.status(200).json({ user: userDetails });
        } else {
            return res.redirect("/");
        }
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

async function editUserDetails(req, res) {
    try {
        let fname = validation.validateFirstName(xss(req.body.firstName));
        let lname = validation.validateLastName(xss(req.body.lastName));
        let email = validation.validateEmail(xss(req.body.username));
        let contact = validation.validateContact(xss(req.body.contact));

        if (req.session.user) {
            let updateUser = await userData.updateUser(fname, lname, email, contact);

            let updatedUser = await userData.getUser(email);

            res.status(200).json({ user: updatedUser });
        } else {
            return res.redirect("/");
        }

    } catch (error) {

    }
}

async function removeUser(req, res) {
    try {
        if (req.session.user) {
            let email = validation.validateEmail(xss(req.body.username));

            let removedUser = await userData.removeUser(email);

            req.session.destroy();

            return res.redirect("/");
        } else {
            return res.redirect("/");
        }

    } catch (error) {

    }
}

router
    .route("/username")
    .get((req, res) => showUserDetails(req, res))
    .patch((req, res) => editUserDetails(req, res))
    .delete((req, res) => removeUser(req, res));

module.exports = router;