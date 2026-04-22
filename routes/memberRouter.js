const memberRouter = require("express").Router();
const memberController = require("../controllers/memberController");

// ==========================================================================
// get routes
// ==========================================================================
memberRouter.get("/welcome", memberController.getWelcome);
memberRouter.get("/new-message", memberController.getNewMessage);

// ==========================================================================
// post routes
// ==========================================================================
memberRouter.post("/new-message", memberController.postNewMessage);

module.exports.memberRouter = memberRouter;
