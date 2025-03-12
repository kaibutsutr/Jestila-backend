const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");
const data = require("../db/db");

const getAllproducts = (req, res) => {
  console.log(data);
  res.status(200).json({ data }); //send json object with success true and  array

  //GET
};
const getByQuery = (req, res) => {
  let page = req.query.page;

  const options = {
    method: "GET",
    url: `https://api.shopier.com/v1/products?`,
    headers: {
      accept: "application/json",
      authorization: constants.Bearer,
    },
    params: { limit: 50, page: page },
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
