const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  image: {
    type: String, // Assuming you will store the image URL or path as a string
    required: true, // You can change this to false if image is optional
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resturant: {
    type: String,
    enum: {
      values: ["KFC", "Mcdonalds", "PizzaHut", "FoodTrack"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
