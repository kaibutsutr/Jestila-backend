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
  let price = 0;
  let minPrice = 0;
  let maxPrice = 100000;
  if (price === 2) {
    minPrice = 0;
    maxPrice = 2000;
  }
  if (price === 4) {
    minPrice = 2000;
    maxPrice = 4000;
  }
  if (price === 6) {
    minPrice = 4000;
    maxPrice = 6000;
  }
  if (price === 8) {
    minPrice = 6000;
    maxPrice = 8000;
  }
  if (price === 10) {
    minPrice = 8000;
    maxPrice = 10000;
  }
  if (price === 12) {
    minPrice = 10000;
    maxPrice = 12000;
  }
  if (price === 14) {
    minPrice = 12000;
    maxPrice = 14000;
  }
  if (price === 16) {
    minPrice = 14000;
    maxPrice = 16000;
  }
  console.log(sentUrl);
  if (sentUrl === "womanshop") {
    // price is of a string type
    var data = _.sortBy(womanData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  if (sentUrl === "-womanshop") {
    // price is of a string type
    var data = _.sortBy(womanData, function (o) {
      let currentPrice = o.priceData.discountedPrice;
      if (minPrice <= currentPrice <= maxPrice) {
        return o.priceData.discountedPrice;
      }
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array
  }
  if (sentUrl === "manshop") {
    // price is of a string type
    var data = _.sortBy(manData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  if (sentUrl === "-manshop") {
    // price is of a string type
    var data = _.sortBy(manData, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array
  }
  if (
    sentUrl === "accessoriesshop" ||
    sentUrl === "bagshop" ||
    sentUrl === "jewelryshop"
  ) {
    // price is of a string type
    var data = _.sortBy(accessoriesData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  if (
    sentUrl === "-accessoriesshop" ||
    sentUrl === "-bagshop" ||
    sentUrl === "-jewelryshop"
  ) {
    // price is of a string type
    var data = _.sortBy(accessoriesData, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array
  }

  if (sentUrl === "brandshop") {
    // price is of a string type
    var data = _.sortBy(allData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  // bring all products
  if (sentUrl === "-brandshop") {
    var data = _.sortBy(allData, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array
  }

  //GET
};

module.exports = {
  getAllproducts,
  getByQuery,
}; // export and object with functions
