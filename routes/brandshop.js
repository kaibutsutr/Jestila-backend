const express = require("express");
const router = express.Router();

const { getAllproducts } = require("../controllers/brandshop");

router.route("/:id").get(getAllproducts);

module.exports = router;
