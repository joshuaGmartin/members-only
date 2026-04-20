function getHome(req, res) {
  //if logged in, skip landing page
  if (res.locals.isAuth) return res.redirect("/messages");

  res.render("index");
}

module.exports = { getHome };
