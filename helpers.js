const axios = require("axios");
const { openai } = require("./openAiConfig");
const pdf = require("pdf-parse");
const { createWorker } = require("tesseract.js");
async function downloadAndParsePdf(url) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const data = await pdf(buffer);
  return data.text;
}
async function processWithOpenAI(fileContent) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that processes file contents.",
      },
      {
        role: "user",
        content: `Process the following file content and extract key information: ${fileContent}`,
      },
    ],
  });

  return completion.choices[0].message.content;
}

async function downloadAndProcessImage(url) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  console.log(buffer);
  const worker = await createWorker();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(buffer);
  await worker.terminate();

  return text;
}

module.exports = {
  downloadAndParsePdf,
  downloadAndProcessImage,
  processWithOpenAI,
};
