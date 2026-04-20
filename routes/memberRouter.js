const memberRouter = require("express").Router();
const memberController = require("../controllers/memberController");

// ==========================================================================
// get routes
// ==========================================================================
memberRouter.get("/welcome", memberController.getWelcome);

// ==========================================================================
// post routes
// ==========================================================================

module.exports.memberRouter = memberRouter;
