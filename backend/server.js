const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/weather', (req, res) => {
  const { city } = req.query;
  res.status(200).json({
    name: city || 'Mock City',
    main: { temp: 22.5, humidity: 60 },
    weather: [{ description: 'clear sky' }],
    wind: { speed: 3.6 },
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
