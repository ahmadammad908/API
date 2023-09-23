const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { resturant, name } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "B" };
  }
  console.log(queryObject);
  if (resturant) {
    queryObject.resturant = resturant;
  }
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
