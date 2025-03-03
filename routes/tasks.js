const express = require("express");
const router = express.Router();

const {
  getAllproducts,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/products");

router.route("/").get(getAllproducts).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
