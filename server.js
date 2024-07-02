require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const { textToJson } = require("./prompts/textToJson");
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example of a POST route to interact with OpenAI API
app.get("/api/chat", async (req, res) => {
  try {
    const completion = await textToJson();

    res.json({
      response: completion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating response from OpenAI");
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});