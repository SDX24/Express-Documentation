const express = require("express"); // Import Express
const app = express(); // Create an Express app

// Define a basic route
app.get('/', (req, res) => {
    res.send(`
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Submit</button>
    </form>
    `);
    });

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});