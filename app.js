const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const { locations } = require("./data.js");

app.use(cors());
app.get("/api/locations", (req, res) => {
  res.json(locations);
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
