const express = require("express");
const productRoute = require("./routes/product.route");
const app = express();
const mongoose = require("mongoose");

//middlewares
app.use(express.json()); //middleware to allow express to parse json data
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://binary_amigo:webarebears@cluster0.i1nsxes.mongodb.net/NODE-API"
  )
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })

  .catch((err) => console.error("Could not connect to MongoDB..."));
