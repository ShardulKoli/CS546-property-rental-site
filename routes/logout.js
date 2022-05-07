const express = require("express");
const router = express.Router();


async function logout(req, res) {

    try {
        req.session.destroy();

    }
    catch (e) {
        res.status(400).json({ errorMessage: e });
    }
}

router
    .route("/")
    .get((req, res) => logout(req, res));

module.exports = router;