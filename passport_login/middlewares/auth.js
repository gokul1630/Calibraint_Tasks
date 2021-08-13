const isLoggedinUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.render('login.ejs');
  }
};
module.exports = isLoggedinUser;
