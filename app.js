const axios = require("axios");
const express = require("express");
const app = express();
const products = require("./routes/products");
const womanshop = require("./routes/womanshop");
const manshop = require("./routes/manshop");
const accesoriesshop = require("./routes/accesoriesshop");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

app.use(express.static("./public"));
app.use(express.json());

// routes

//

app.use("/api/v1/products", products);
app.use("/api/v1/womanshop", womanshop);
app.use("/api/v1/manshop", manshop);
app.use("/api/v1/accesoriesshop", accesoriesshop);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
