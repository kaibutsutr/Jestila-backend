const axios = require("axios");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const constants = require("../constants");

const getOneProduct = async (req, res) => {
  const {
    params: { id: productId },
  } = req;

  const options = {
    method: "GET",
    url: `https://api.shopier.com/v1/products/${productId}`,
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
      console.log(data);
      res.status(200).json({ data }); //send json object with success true and  array
    })
    .catch((err) => console.error(err));
};

module.exports = {
  getOneProduct,
}; // export and object with functions
