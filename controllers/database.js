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
  const {
    params: { url: url },
  } = req;

  let sentUrl = req.params.url;
  console.log(sentUrl);
  if (sentUrl === "womanshop") {
    // price is of a string type
    var sortedArray = _.sortBy(womanData, parseInt("discountedPrice"));
    console.log(sortedArray);
    res.status(200).json({ sortedArray }); //send json object with success true and  array
  }
  if (sentUrl === "-womanshop") {
    // price is of a string type
    var sortedArray = _.sortBy(
      womanData,
      "priceData.discountedPrice"
    ).reverse();
    console.log(sortedArray);
    res.status(200).json({ sortedArray }); //send json object with success true and  array
  }
  if (sentUrl === "manshop") {
    res.status(200).json({ manData }); //send json object with success true and  array
  }
  if (sentUrl === "accessoriesshop") {
    res.status(200).json({ accessoriesData }); //send json object with success true and  array
  }

  //GET
};

module.exports = {
  getAllproducts,
  getByQuery,
}; // export and object with functions
