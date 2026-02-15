const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const contentRoutes = require("./routes/contentRoutes");
const mediaRoutes = require("./routes/mediaRoutes");
const visitorRoutes = require("./routes/visitorRoutes");
const contactRoutes = require("./routes/contactRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const PORT = process.env.PORT || 5000;

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/content", contentRoutes);
  app.use("/api/media", mediaRoutes);
  app.use("/api/visitors", visitorRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/analytics", analyticsRoutes);

  return app;
};

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aethonDB");
  console.log("MongoDB connected");
};

const startServer = async () => {
  try {
    await connectDb();
    const app = createApp();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("DB Error:", error);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}

module.exports = { createApp, startServer, connectDb };
