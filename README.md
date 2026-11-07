# Kantana Dashboard

A simple, always-on family dashboard: date & time, weather, drive time to work, and a countdown to arrive by 8:40.

## Use
Open `index.html` in a browser (or host it free with GitHub Pages / leave it on a tablet).
Edit `config.js` to set your city, home/work addresses, and arrival time.

- **Weather**: Open-Meteo — no key needed.
- **Traffic**: add a Google Maps API key (Routes API enabled; restrict it to your site's domain) to `googleMapsApiKey`. Without a key, the card links to live traffic in Google Maps.
- **Countdown**: counts to the next weekday arrival time; with traffic enabled it also shows "Leave by".
