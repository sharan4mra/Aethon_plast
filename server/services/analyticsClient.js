const path = require("path");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

let cachedClient = null;

const resolveKeyPath = () => {
  const raw = process.env.GA_KEY_PATH || "ga-service-account.json";
  if (path.isAbsolute(raw)) return raw;
  return path.resolve(__dirname, "..", raw);
};

const getAnalyticsClient = () => {
  if (cachedClient) return cachedClient;
  const keyFile = resolveKeyPath();
  cachedClient = new BetaAnalyticsDataClient({ keyFilename: keyFile });
  return cachedClient;
};

const getPropertyId = () => process.env.GA_PROPERTY_ID || "";

module.exports = { getAnalyticsClient, getPropertyId };
