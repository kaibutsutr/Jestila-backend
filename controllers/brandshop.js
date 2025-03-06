const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");

const getAllproducts = (req, res) => {
  const {
    params: { brand: brandName },
  } = req;

  const options = {
    method: "GET",
    url: `https://api.shopier.com/v1/products?categoryId=${constants.brand}&limit=10&page=1&sort=dateDesc`,
    headers: {
      accept: "application/json",
      authorization: constants.Bearer,
    },
  };

  axios
    .request(options)
    .then((response) => {
      const contentType = response.headers["content-type"];
      const data = response.data;
      res.status(200).json({ data }); //send json object with success true and  array
    })
    .catch((err) => console.error(err));

  //GET
};

module.exports = {
  getAllproducts,
}; // export and object with functions
