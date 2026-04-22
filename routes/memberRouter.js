const memberRouter = require("express").Router();
const memberController = require("../controllers/memberController");
const registerAdminController = require("../controllers/registerAdminController");

// ==========================================================================
// get routes
// ==========================================================================
memberRouter.get("/welcome", memberController.getWelcome);
memberRouter.get("/new-message", memberController.getNewMessage);
memberRouter.get("/admin-register", registerAdminController.getAdminRegister);

// ==========================================================================
// post routes
// ==========================================================================
memberRouter.post("/new-message", memberController.postNewMessage);
memberRouter.post("/admin-register", registerAdminController.postAdminRegister);

module.exports.memberRouter = memberRouter;
