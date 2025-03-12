const express = require("express");
const router = express.Router();

const { getAllproducts, getByQuery } = require("../controllers/database");

router.route("/").get(getAllproducts);
router.route("/:url").get(getByQuery);

module.exports = router;
