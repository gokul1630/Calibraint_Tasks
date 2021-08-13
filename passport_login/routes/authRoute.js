const passport = require('passport');
const isLoggedinUser = require('../middlewares/auth');
const router = require('express').Router();

router.get('/', isLoggedinUser, (req, res) => {
  res.render('login.ejs');
});

router.get('/welcome', (req, res) => {
  res.render('index.ejs', {
    name: req.user.displayName,
    imageUrl: req.user._json.avatar_url,
    userName: req.user.username,
  });
});

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/auth',
  }),
  (req, res) => {
    res.redirect('/auth/welcome');
  }
);

router.get('/logout', (req, res) => {
  (req.session = null), req.logOut(), res.redirect('/auth/');
});

module.exports = router;
