const express = require("express");
const router = express.Router();

const { getByQuery } = require("../controllers/sizefilter");

router.route("/").get(getByQuery);

module.exports = router;
