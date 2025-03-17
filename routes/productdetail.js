const express = require("express");
const router = express.Router();

const { getOneProduct } = require("../controllers/productdetail");

router.route("/:id").get(getOneProduct);
module.exports = router;
