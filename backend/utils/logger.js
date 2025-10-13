const { createLogger, format, transports } = require("winston");
const config = require("../config");

const emojiLevels = {
  error: "❌",
  warn: "⚠️",
  info: "ℹ️",
  debug: "🐛",
};

const colorizer = format.colorize();

const devFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ level, message, timestamp, ...meta }) => {
    const coloredLevel = colorizer.colorize(level, level.toUpperCase());
    const emoji = emojiLevels[level] || "";

    const metaString = Object.keys(meta).length
      ? `\n🔍 ${JSON.stringify(meta, null, 2)}`
      : "";

    return `[${timestamp}] ${emoji} ${coloredLevel}: ${message}${metaString}`;
  })
);

const prodFormat = format.combine(format.timestamp(), format.json());

const logger = createLogger({
  level: config.env === "development" ? "debug" : "info",
  format: config.env === "development" ? devFormat : prodFormat,
  transports: [new transports.Console()],
});

module.exports = logger;
