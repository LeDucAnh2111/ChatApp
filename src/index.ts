import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("testAPI");
});

app.listen(3000, "localhost", () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
