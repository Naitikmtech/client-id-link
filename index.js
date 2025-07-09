const express = require("express");
const app = express();

app.get("/candidate/show-client", (req, res) => {
  const clientId = req.query.clientId || "Not Provided";
  res.send(`<h2>✅ Client ID: ${clientId}</h2>`);
});

app.get("/", (req, res) => {
  res.send("✅ Replit App is running. Try /candidate/show-client?clientId=abc");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
