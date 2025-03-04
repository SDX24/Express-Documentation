const express = require("express"); // Import Express
const app = express(); // Create an Express app

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: true }));

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

// Define a POST route to handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});