//redirect to home if no logged in
module.exports.isAuthCheck = function (req, res, next) {
  if (!res.locals.isAuth) return res.redirect("/");
  next();
};

//redirect to home if non-member in member area
module.exports.isMemberCheck = function (req, res, next) {
  if (!res.locals.user.is_member) return res.redirect("/");
  next();
};
//redirect to home if non-admin in admin area
module.exports.isAdminCheck = function (req, res, next) {
  if (!res.locals.user.is_admin) return res.redirect("/");
  next();
};
