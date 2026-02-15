const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aethonDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

// Routes
app.use("/products", productRoutes);
app.use("/admin", adminRoutes);  // ⭐ USERS WILL COME FROM HERE

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
