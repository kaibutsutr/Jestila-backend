const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");
const allData = require("../db/db"); // all
const womanData = require("../db/womanshop"); //woman data
const manData = require("../db/manshop");
const accessoriesData = require("../db/accessoriesshop");
const _ = require("underscore");

const getAllproducts = (req, res) => {
  res.status(200).json({ allData }); //send json object with success true and  array

  //GET
};
const getByQuery = (req, res) => {
  let size = req.query.size;
  let sizeId = constants[size];
  console.log(sizeId);

  let categoryId = req.query.id;
  console.log(categoryId);

  const options = {
    method: "GET",
    url: `https://api.shopier.com/v1/products?`,
    headers: {
      accept: "application/json",
      authorization: constants.Bearer,
    },
    params: { categoryId: categoryId, selectionId: sizeId, limit: 5 },
  };

  axios
    .request(options)
    .then((response) => {
      const contentType = response.headers["content-type"];
      const data = response.data;
      console.log(data);
      res.status(200).json({ data }); //send json object with success true and  array
    })
    .catch((err) => console.error(err));

  //GET
};

module.exports = {
  getAllproducts,
  getByQuery,
}; // export and object with functions
