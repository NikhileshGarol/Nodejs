const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const ProductRoute = require("./routes/product.route");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies

const PORT = process.env.PORT || 3000;

// Initail Route
app.get("/api", (req, res) => {
  res.send("Hello, from Expressjs!");
});

//Routes
app.use("/api/product", ProductRoute);

mongoose
  .connect(
    "mongodb+srv://ngarol81_db_user:J9lTeh1vgDZR7ZPc@nodejsdb.8w5rpig.mongodb.net/Node-API?appName=NodejsDB"
  )
  .then(() => {
    console.log("Connected to DB!");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log("Connect Failed to DB", err));
