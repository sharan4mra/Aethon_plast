const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    sentTo: { type: String, required: true, trim: true, lowercase: true },
    mailStatus: {
      type: String,
      enum: ["queued", "sent", "failed"],
      default: "queued",
    },
    sentAt: { type: Date },
    errorMessage: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
