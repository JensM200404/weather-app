require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/WeatherRoutes");
const config = require("./config");

const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
