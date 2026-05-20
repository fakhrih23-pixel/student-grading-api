import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Student Grading API running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
