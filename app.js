const express = require("express");

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
// routes
// ==========================================================================
const routes = require("./routes");

app.use(routes);

// ==========================================================================
// 404
// ==========================================================================
app.use((req, res) => res.send("404: Page not found"));

// ==========================================================================
// server
// ==========================================================================
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log("Express app listening on port: ", PORT);
});
