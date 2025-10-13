require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/WeatherRoutes");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
