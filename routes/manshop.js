const express = require("express");
const router = express.Router();

const { getAllproducts } = require("../controllers/manshop");

router.route("/").get(getAllproducts);

module.exports = router;
