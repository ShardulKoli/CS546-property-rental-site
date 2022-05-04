const express = require("express");
const router = express.Router();


async function logout(req, res) {

    try {
        if (req.session.user) {
            req.session.destroy();
            //send data to client if client session needs to be destroyed too
        }

        res.status(200).redirect("/");
    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .get((req, res) => logout(req, res));

module.exports = router;