const express = require("express"); // Import Express
const app = express(); // Create an Express app

// Define a basic route
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});