const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true, trim: true },
    ip: { type: String, default: "" },
    userAgent: { type: String, default: "" },
    referrer: { type: String, default: "" },
    lastPath: { type: String, default: "/" },
    pages: [{ type: String }],
    visits: { type: Number, default: 0 },
    firstSeenAt: { type: Date, default: Date.now },
    lastSeenAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Visitor", visitorSchema);

