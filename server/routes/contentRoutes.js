const express = require("express");
const Content = require("../models/Content");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const docs = await Content.find().sort({ updatedAt: -1 });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch content" });
  }
});

router.get("/key/:key", async (req, res) => {
  try {
    const doc = await Content.findOne({ key: req.params.key });
    if (!doc) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.json(doc);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch content" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { key, title, data } = req.body;
    const created = await Content.create({ key, title, data });
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: "Failed to create content entry" });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { key, title, data } = req.body;
    const updated = await Content.findByIdAndUpdate(
      req.params.id,
      { key, title, data },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Failed to update content entry" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Content.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete content entry" });
  }
});

module.exports = router;
