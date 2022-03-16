const express = require("express");
const router = express.Router();

/**
 * Return some data for test
 */
router.route("/").get(async (req, res) => {
  try {
    const testData = {
      key: "value1",
    };
    res.json(testData);
  } catch (e) {
    res.status(500).send({ error: e });
  }
});

module.exports = router;
