const mongoose = require("mongoose");
uri =
  "mongodb+srv://ahmadammad789:Jox1w4x6by3bDNXS@cluster0.nosyo6t.mongodb.net/Cluster0?retryWrites=true&w=majority";
const connectDB = () => {
  console.log("db connect");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
