require('dotenv').config();
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
const isLoggedinUser = require('./middlewares/auth');
const authRoute = require('./routes/authRoute');
const cors = require('cors');
require('./config/passport');

const PORT = process.env.PORT || 1234;

app.use(
  cookieSession({
    name: 'github-session',
    keys: ['key1', 'key2'],
  })
);
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoute);

app.set('view-engine', 'ejs');

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
