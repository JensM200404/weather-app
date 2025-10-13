const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
  logger.error("Unhandled error", {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });

  if (err.message === "City not found") {
    return res.status(404).json({ error: "City not found" });
  }

  if (err.message.includes("API key")) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  res.status(500).json({ error: "Internal server error" });
};

module.exports = errorHandler;
