const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");
const allData = require("../db/db"); // all
const womanData = require("../db/womanshop"); //woman data
const manData = require("../db/manshop");
const accessoriesData = require("../db/accessoriesshop");
const bagData = require("../db/bagshop");
const jewelryData = require("../db/jewelryshop");
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
      return o.priceData.discountedPrice;
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
  if (sentUrl === "accessoriesshop") {
    // price is of a string type
    var data = _.sortBy(accessoriesData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  if (sentUrl === "-accessoriesshop") {
    // price is of a string type
    var data = _.sortBy(accessoriesData, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array
  }
  if (sentUrl === "bagshop") {
    // price is of a string type
    var data = _.sortBy(bagData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  if (sentUrl === "-bagshop") {
    // price is of a string type
    var data = _.sortBy(bagData, function (o) {
      return o.priceData.discountedPrice;
    });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array
  }
  if (sentUrl === "jewelryshop") {
    // price is of a string type
    var data = _.sortBy(jewelryData, function (o) {
      return o.priceData.discountedPrice;
    });
    var reversedData = data.reverse();
    console.log(reversedData);
    res.status(200).json({ reversedData }); //send json object with success true and  array
  }
  if (sentUrl === "-jewelryshop") {
    // price is of a string type
    var data = _.sortBy(jewelryData, function (o) {
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
