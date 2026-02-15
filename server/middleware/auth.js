const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  const parts = authHeader.split(" ");
  const token = parts.length === 2 ? parts[1] : null;

  if (!token) {
    return res.status(401).json({ message: "Invalid authorization header" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    if (verified.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    req.admin = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
