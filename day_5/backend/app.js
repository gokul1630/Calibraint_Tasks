const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./routes/Todo');
const app = express();
require('dotenv').config();



const port = process.env.PORT || 1234;
const URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const dataBase = mongoose.connection;

dataBase.once('open', () => {
  console.log('Database Connected');
});

dataBase.on('error', console.error.bind(console, 'Error'));

app.use('/todo', Todo);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
