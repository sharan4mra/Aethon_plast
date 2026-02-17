const path = require("path");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

let cachedClient = null;

const resolveKeyPath = () => {
  const raw = process.env.GA_KEY_PATH || "ga-service-account.json";
  if (path.isAbsolute(raw)) return raw;
  return path.resolve(__dirname, "..", raw);
};

const parseInlineCredentials = () => {
  const raw = process.env.GA_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;

  try {
    const text = raw.trim().startsWith("{")
      ? raw
      : Buffer.from(raw, "base64").toString("utf8");
    return JSON.parse(text);
  } catch (error) {
    const err = new Error("Invalid GA_SERVICE_ACCOUNT_JSON format.");
    err.status = 500;
    throw err;
  }
};

const getAnalyticsClient = () => {
  if (cachedClient) return cachedClient;

  const inlineCredentials = parseInlineCredentials();
  if (inlineCredentials) {
    cachedClient = new BetaAnalyticsDataClient({ credentials: inlineCredentials });
    return cachedClient;
  }

  const keyFile = resolveKeyPath();
  cachedClient = new BetaAnalyticsDataClient({ keyFilename: keyFile });
  return cachedClient;
};

const getPropertyId = () => process.env.GA_PROPERTY_ID || "";

module.exports = { getAnalyticsClient, getPropertyId };
