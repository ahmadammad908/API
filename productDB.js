const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://ahmadammad789:Jox1w4x6by3bDNXS@cluster0.nosyo6t.mongodb.net/Cluster0?retryWrites=true&w=majority"
    );
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("Success");
  } catch (error) {}
};

start();
