const express = require("express");
const router = express.Router();

const {
  getAllproducts,

  getByQuery,
} = require("../controllers/accessoriesshop");

router.route("/").get(getAllproducts);
router.route("/:id").get(getByQuery);

module.exports = router;
