const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

//GET Routes
router.get("/", getProducts);
router.get("/:id", getProduct);

//POST Routes
router.post("/", createProduct);

//PUT Routes
router.put("/:id", updateProduct);

//DELETE Routes
router.delete(":id", deleteProduct);

module.exports = router;
