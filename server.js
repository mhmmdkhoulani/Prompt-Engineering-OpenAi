require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const { cvAsTextToJson } = require("./prompts/cvAsText");
const { fileProcessing } = require("./prompts/fileToJson");

const {
  downloadAndParsePdf,
  processWithOpenAI,
  downloadAndProcessImage,
} = require("./helpers");
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example of a Get route to interact with OpenAI API
app.get("/api/chat", async (req, res) => {
  try {
    const completion = await cvAsTextToJson();
    const response = completion
      .replace(/```json\n/, "")
      .replace(/\n```/, "")
      .replace(/\n/g, "")
      .replace(/\\"/g, '"');
    res.json({
      response: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating response from OpenAI");
  }
});
app.post("/cv", async (req, res) => {
  try {
    const result = await fileProcessing(req);
    res.json({ result });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get("/process-file", async (req, res) => {
  try {
    const bucketName = "YOUR_BUCKET_NAME";
    const fileName = "YOUR_FILE_NAME";

    // Get the file URL from S3
    //const fileUrl = await getS3FileUrl(bucketName, fileName);

    // Download the file content
    const fileContent = await downloadAndParsePdf(
      "https://s3.eu-north-1.amazonaws.com/tech-sphere.academy.talpods.io/MOHAMMAD+KHOULANI+NEW.pdf"
    );

    // Process the file content with OpenAI
    // const result = await processWithOpenAI(fileContent);

    res.json({ fileContent });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the file" });
  }
});

app.get("/process-image", async (req, res) => {
  try {
    // Download the file content
    const imageContent = await downloadAndProcessImage(
      "https://s3.eu-north-1.amazonaws.com/tech-sphere.academy.talpods.io/Mughees+Mehdi+-+Recommendation.png"
    );

    // Process the file content with OpenAI
    // const result = await processWithOpenAI(fileContent);

    res.json({ imageContent });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the file" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
