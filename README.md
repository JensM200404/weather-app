## Getting Started

### Setting up backend

- First, clone the repo in a folder to your wish

- Navigate to weather-app/backend. In this folder create a file named .env with the following:

```
WEATHER_API_KEY=your given api key
NODE_ENV=development
PORT=5001
NEXT_PUBLIC_BACKEND_URL=http://localhost:5001
```

- Next, use this to install necessary packages

```bash
npm install
```

- Run backend with:

```bash
node server.js
```

- **Remember**: this needs to run togheter with the frontend for the application to work

### Setting up frontend

- Navigate to root file /weather-app
- Next, use this to install necessary packages

```bash
npm install
```

- Run backend using:

```bash
npm run dev
```

- **Finally** go to http://localhost:3000 and enjoy the app!

## How to use weather-app

### Searching weather by city

- Use the searchbar to search for any city, by pressing the search button, you can see the details.

### Adding favorites

- When searching for a city, a button appears underneath the detatils. Use this button to add the city to your favorites. You will know it worked once a popup appears.

### Using the map

- When adding cities to your favorites, the current weather condition of that city appears on the location on the map.
- Click on the weather icon, on the city, to view some details.
