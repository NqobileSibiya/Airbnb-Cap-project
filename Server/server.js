const express = require('express');
const cors = require('cors');
const routes = require('./Route'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Use your routes
app.use('/api', routes); // Ensure routes are set up correctly

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
