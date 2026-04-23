const adminRouter = require("express").Router();
const adminController = require("../controllers/adminController");

// ==========================================================================
// get routes
// ==========================================================================
adminRouter.get("/dashboard", adminController.getAdminDashboard);

// ==========================================================================
// post routes
// ==========================================================================
adminRouter.post("/message-delete", adminController.postDeleteMessage);
adminRouter.post("/reset", adminController.postReset);

module.exports.adminRouter = adminRouter;
