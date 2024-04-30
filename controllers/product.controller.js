const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const product = Product.findById(id);

    if (!product) {
      res.status(404).json({ msg: "Product doesnt exist" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = Product.create(req.body);
    res.status(201).json({ msg: "Product Created" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndUpdate(_id, req.body);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(_id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndDelete(_id);
    if (!product) {
      return res.status(404).json({ message: "Product doesnt exist" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
