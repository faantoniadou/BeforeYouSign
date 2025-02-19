const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from MERN stack!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});


// connect MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/before-you-sign', {
}).then(() => {
  console.log('Connected to MongoDB.');
}).catch(error => {
  console.error(error);
});