const axios = require("axios");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const url = require("url");
const querystring = require("querystring");
const products = require("./routes/products");
const womanshop = require("./routes/womanshop");
const manshop = require("./routes/manshop");
const accessoriesshop = require("./routes/accessoriesshop");
const jewelryshop = require("./routes/jewelryshop");
const bagshop = require("./routes/bagshop");
const database = require("./routes/database");
const brandshop = require("./routes/brandshop");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware

app.use(express.static("./public"));
// use the created website on root
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes

//

app.use("/api/v1/products", products);
app.use("/api/v1/womanshop", womanshop);
app.use("/api/v1/manshop", manshop);
app.use("/api/v1/accessoriesshop", accessoriesshop);
app.use("/api/v1/jewelryshop", jewelryshop);
app.use("/api/v1/bagshop", bagshop);
app.use("/api/v1/brandshop", brandshop);
app.use("/api/v1/database", database);

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
//start server
start();
