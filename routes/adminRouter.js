const adminRouter = require("express").Router();
const adminController = require("../controllers/adminController");

// ==========================================================================
// get routes
// ==========================================================================

// ==========================================================================
// post routes
// ==========================================================================
adminRouter.post("/message-delete", adminController.postDeleteMessage);

module.exports.adminRouter = adminRouter;
