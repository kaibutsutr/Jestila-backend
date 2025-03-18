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
  search = search.toLowerCase();

  console.log(search);

  // price is of a string type
  var questions = [
    { question: "what is your name" },
    { question: "How old are you" },
    { question: "whats is your mothers name" },
    { question: "where do work/or study" },
  ];

  var data = _.filter(allData, function (obj) {
    // `~` with `indexOf` means "contains"
    // `toLowerCase` to discard case of question string
    return ~obj.title.toLowerCase().indexOf(search);
  });

  // const result = allData.filter(
  //   (o) => o.title = minPrice
  // );
  // var data = _.sortBy(result, function (o) {
  //   return o.priceData.discountedPrice;
  // });
  console.log(data);
  res.status(200).json({ data }); //send json object with success true and  array);
};

module.exports = {
  getByQuery,
}; // export and object with functions
