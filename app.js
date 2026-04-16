const express = require("express");
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
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const pgPool = require("./config/database");

const sessionStore = new pgSession({ pool: pgPool });

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 100 * 60 * 60 * 24, // 1 day
    },
  }),
);

// ==========================================================================
// authentication
// ==========================================================================
const passport = require("passport");
require("./config/passport");
app.use(passport.session());

// ==========================================================================
// routes
// ==========================================================================
const routes = require("./routes");

// global variables
app.use((req, res, next) => {
  res.locals.isAuth = req.isAuthenticated();
  res.locals.user = req.user;
  next();
});

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

// ==========================================================================
// testing
// ==========================================================================
