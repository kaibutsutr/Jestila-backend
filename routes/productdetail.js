const express = require("express");
const router = express.Router();

const { getOneProduct } = require("../controllers/products");

router.route("/:id").get(getOneProduct);
module.exports = router;
