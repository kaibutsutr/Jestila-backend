const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");

const getAllproducts = (req, res) => {
  let page = req.query.page;
  let limit = req.query.limit;
  let categoryId = req.query.categoryId;

  const options = {
    method: "GET",
    url: `https://api.shopier.com/v1/products`,
    headers: {
      accept: "application/json",
      authorization: constants.Bearer,
    },
    params: { categoryId: categoryId, limit: limit, page: page },
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
}; // export and object with functions
