const express = require("express");
const router = express.Router();

const {
  getAllproducts,

  getProduct,
  getOneProduct,
} = require("../controllers/products");

router.route("/").get(getAllproducts);
router.route("/:id").get(getOneProduct);
module.exports = router;
