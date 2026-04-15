const express = require("express");
// const session = require("express-session");
// const pgSession = require("connect-pg-simple")(session);
// const pgPool = require("./config/database");
require("dotenv").config();

// ==========================================================================
// app
// ==========================================================================
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// ==========================================================================
// session
// ==========================================================================
// const sessionStore = new pgSession({ pool: pgPool });

// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: sessionStore,
//     cookie: {
//       maxAge: 100 * 60 * 60 * 24, // 1 day
//     },
//   }),
// );

// ==========================================================================
// authentication
// ==========================================================================
require("./config/passport");
// app.use(passport.session());

// ==========================================================================
// routes
// ==========================================================================
const routes = require("./routes");
const passport = require("passport");

app.use(routes);

// ==========================================================================
// 404
// ==========================================================================
app.use((req, res) => res.send("404: Page not found"));

// ==========================================================================
// errors
// ==========================================================================
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

// ==========================================================================
// server
// ==========================================================================
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log("Express app listening on port: ", PORT);
});
