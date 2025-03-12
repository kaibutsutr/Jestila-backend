const express = require("express");
const router = express.Router();

const { getAllproducts } = require("../controllers/database");

router.route("/").get(getAllproducts);

module.exports = router;
