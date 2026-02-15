const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

const router = express.Router();

// ==========================
// ADMIN LOGIN
// ==========================
const ADMIN = {
  email: process.env.ADMIN_EMAIL || "admin@test.com",
  password: process.env.ADMIN_PASSWORD || "123456"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {
    const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});


// ==========================
// USERS CRUD ROUTES
// ==========================

// GET users
router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// CREATE user
router.post("/users", auth, async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Failed to create user" });
  }
});

// UPDATE user
router.put("/users/:id", auth, async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Failed to update user" });
  }
});

// DELETE user
router.delete("/users/:id", auth, async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
});

module.exports = router;
