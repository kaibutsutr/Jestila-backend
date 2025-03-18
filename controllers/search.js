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

const getByQuery = (req, res) => {
  let search = req.query.search;

  console.log(search);
  if (sentUrl !== undefined) {
    // price is of a string type
    var data = _.filter(allData, function (item, index) {
      return _.contains([search], item.title);
    });
    // const result = allData.filter(
    //   (o) => o.title = minPrice
    // );
    // var data = _.sortBy(result, function (o) {
    //   return o.priceData.discountedPrice;
    // });
    console.log(data);
    res.status(200).json({ data }); //send json object with success true and  array);
  }
};

module.exports = {
  getByQuery,
}; // export and object with functions
