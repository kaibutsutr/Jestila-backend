const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");
const allData = require("../db/db"); // all
const womanData = require("../db/womanshop"); //woman data
const manData = require("../db/manshop");
const accessoriesData = require("../db/accessoriesshop");
const bagData = require("../db/bagshop");
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
    const result = womanData.filter(
      (o) => o.priceData.discountedPrice >= minPrice
    );
    var data = _.sortBy(result, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }

  if (sentUrl === "manshop") {
    // price is of a string type
    const result = manData.filter(
      (o) => o.priceData.discountedPrice >= minPrice
    );
    var data = _.sortBy(result, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }
  if (sentUrl === "accessoriesshop") {
    // filter by price first
    const result = accessoriesData.filter(
      (o) => o.priceData.discountedPrice >= minPrice
    );
    // then sort them ascending
    var data = _.sortBy(result, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }
  if (sentUrl === "bagshop") {
    // filter by price first
    const result = bagData.filter(
      (o) => o.priceData.discountedPrice >= minPrice
    );
    // then sort them ascending
    var data = _.sortBy(result, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }
};

module.exports = {
  getAllproducts,
  getByQuery,
}; // export and object with functions
