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
  let sentUrl = req.query.url;
  let minPrice = parseInt(req.query.price);

  console.log(sentUrl);
  if (sentUrl === "womanshop") {
    // price is of a string type
    var data = _.sortBy(womanData, function (o) {
      var currentPrice = o.priceData.discountedPrice;

      if (currentPrice > minPrice) {
        return o.priceData.discountedPrice;
      }
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }

  if (sentUrl === "manshop") {
    // price is of a string type
    var data = _.sortBy(manData, function (o) {
      var currentPrice = o.priceData.discountedPrice;

      if (currentPrice > minPrice) {
        return o.priceData.discountedPrice;
      }
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }
  //GET
  if (sentUrl === "accessoriesshop") {
    // price is of a string type
    var data = _.sortBy(accessoriesData, function (o) {
      var currentPrice = o.priceData.discountedPrice;

      if (currentPrice > minPrice) {
        return o.priceData.discountedPrice;
      }
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }
};

module.exports = {
  getAllproducts,
  getByQuery,
}; // export and object with functions
