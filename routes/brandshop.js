const express = require("express");
const router = express.Router();

const {
  getAllproducts,

  getByQuery,
} = require("../controllers/brandshop");

router.route("/").get(getAllproducts);
router.route("/:id").get(getByQuery);

module.exports = router;
