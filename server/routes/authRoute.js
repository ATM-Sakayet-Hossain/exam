const express = require('express');
const route = express.Router()


route.get('/get', (req, res) => {
  res.send('this is auth route');
});

module.exports = route