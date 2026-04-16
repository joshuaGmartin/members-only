const logoutRouter = require("express").Router();
const logoutController = require("../controllers/logoutController");

// ==========================================================================
// get routes
// ==========================================================================
// logoutRouter.get("/", logoutController.getLogout);

// ==========================================================================
// post routes
// ==========================================================================
logoutRouter.post("/", logoutController.postLogout);

module.exports.logoutRouter = logoutRouter;
