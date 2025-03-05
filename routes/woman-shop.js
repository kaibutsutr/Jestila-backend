const express = require("express");
const router = express.Router();

const { getAllproducts } = require("../controllers/womanshop");

router.route("/").get(getAllproducts);

module.exports = router;
