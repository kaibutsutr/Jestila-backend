const express = require("express");
const router = express.Router();

const { getAllproducts } = require("../controllers/accessoriesshop");

router.route("/").get(getAllproducts);

module.exports = router;
