const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport.serializeUser(function (user, done) {
  return done(null, user);
});
passport.deserializeUser(function (user, done) {
  return done(null, user);
});

passport.use(
  new GithubStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: 'http://localhost:1234/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
