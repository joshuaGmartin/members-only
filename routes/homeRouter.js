const homeRouter = require("express").Router();
const homeController = require("../controllers/homeController");

// ==========================================================================
// get routes
// ==========================================================================
homeRouter.get("/", homeController.getHome);

// ==========================================================================
// post routes
// ==========================================================================

module.exports.homeRouter = homeRouter;
