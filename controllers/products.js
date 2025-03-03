const Product = require("../models/Product");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const getAllproducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});

const createProduct = asyncWrapper(async (req, res) => {
  const Product = await Product.create(req.body);
  res.status(201).json({ Product });
});

const getProduct = asyncWrapper(async (req, res, next) => {
  const { id: ProductID } = req.params;
  const Product = await Product.findOne({ _id: ProductID });
  if (!Product) {
    return next(createCustomError(`No Product with id : ${ProductID}`, 404));
  }

  res.status(200).json({ Product });
});
const deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id: ProductID } = req.params;
  const Product = await Product.findOneAndDelete({ _id: ProductID });
  if (!Product) {
    return next(createCustomError(`No Product with id : ${ProductID}`, 404));
  }
  res.status(200).json({ Product });
});
const updateProduct = asyncWrapper(async (req, res, next) => {
  const { id: ProductID } = req.params;

  const Product = await Product.findOneAndUpdate({ _id: ProductID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!Product) {
    return next(createCustomError(`No Product with id : ${ProductID}`, 404));
  }

  res.status(200).json({ Product });
});

module.exports = {
  getAllproducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
