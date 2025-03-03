const express = require("express");
const router = express.Router();

const {
  getAllproducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").get(getAllproducts).post(createProduct);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
