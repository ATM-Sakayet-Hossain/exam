require("dotenv").config()
const express = require('express');
const app = express();
const route = require("./routes")
// const dbconfig = require("./config");
const dbConfig = require("./config/config");
const port = 3000;

app.use(express.json())
app.use(route)
dbConfig()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});