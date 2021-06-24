const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile("./index.html");
})

app.listen(3000, 'localhost', () => {
  console.log('Server is running on port 3000');
})