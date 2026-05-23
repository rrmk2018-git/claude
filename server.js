const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, images, etc.)
app.use(express.static(__dirname));

// Default route → car-booking.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'car-booking.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Car Booking System running on port ${PORT}`);
});
