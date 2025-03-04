const express = require("express");
const router = express.Router();

const {
  getAllproducts,

  getProduct,
} = require("../controllers/products");

router.route("/").get(getAllproducts);

module.exports = router;
