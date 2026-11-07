// Edit these values to personalize the dashboard.
window.CONFIG = {
  title: "Good day!",
  // Weather (Open-Meteo, no API key needed). Use a city name OR set lat/lon.
  city: "Austin, TX",
  lat: null,
  lon: null,
  units: "fahrenheit", // "fahrenheit" or "celsius"

  // Arrival deadline (24h clock) and which days it applies
  arriveBy: { hour: 8, minute: 40 },
  workDays: [1, 2, 3, 4, 5], // 0=Sun ... 6=Sat

  // Traffic. Live drive time needs a Google Maps API key with the
  // "Routes API" enabled. Without a key the card shows a button that opens
  // live traffic in Google Maps.
  home: "123 Main St, Austin, TX",
  work: "456 Office Blvd, Austin, TX",
  googleMapsApiKey: "",
  refreshMinutes: 5,
};
