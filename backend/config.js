const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  PORT: Joi.number().default(5001),
  WEATHER_API_KEY: Joi.string().required().label("OpenWeather API Key"),
  NEXT_PUBLIC_BACKEND_URL: Joi.string().uri().optional(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`❌ Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  weatherApiKey: envVars.WEATHER_API_KEY,
  backendUrl:
    envVars.NEXT_PUBLIC_BACKEND_URL || `http://localhost:${envVars.PORT}`,
};

module.exports = config;
