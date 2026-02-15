const express = require("express");
const Visitor = require("../models/Visitor");
const auth = require("../middleware/auth");

const router = express.Router();

const getIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return String(forwarded).split(",")[0].trim();
  return req.socket?.remoteAddress || "";
};

// Public route: track website usage
router.post("/track", async (req, res) => {
  try {
    const { sessionId, path } = req.body || {};
    if (!sessionId) {
      return res.status(400).json({ message: "sessionId is required" });
    }

    const now = new Date();
    const normalizedPath = typeof path === "string" && path.trim() ? path.trim() : "/";

    const updated = await Visitor.findOneAndUpdate(
      { sessionId },
      {
        $set: {
          ip: getIp(req),
          userAgent: req.headers["user-agent"] || "",
          referrer: req.headers.referer || "",
          lastPath: normalizedPath,
          lastSeenAt: now,
        },
        $setOnInsert: {
          firstSeenAt: now,
        },
        $inc: { visits: 1 },
        $addToSet: { pages: normalizedPath },
      },
      { upsert: true, new: true, runValidators: true }
    );

    res.json({ ok: true, id: updated._id });
  } catch (error) {
    res.status(500).json({ message: "Failed to track visitor" });
  }
});

// Admin route: list all website visitors
router.get("/", auth, async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ lastSeenAt: -1, createdAt: -1 });
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch visitors" });
  }
});

// Admin route: delete one visitor
router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Visitor.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Visitor not found" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete visitor" });
  }
});

module.exports = router;

