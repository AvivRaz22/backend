const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }
    res.send(data);
  });
});

app.post("/todos", (req, res) => {
  fs.writeFile("todos.json", JSON.stringify(req.body), (err) => {
    if (err) {
      res.status(500).send("Error writing file");
      return;
    }
    res.send("todos saved");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
