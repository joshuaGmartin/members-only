const messagesRouter = require("express").Router();
const messagesController = require("../controllers/messagesController");

// ==========================================================================
// get routes
// ==========================================================================
messagesRouter.get("/", messagesController.getMessages);

// ==========================================================================
// post routes
// ==========================================================================

module.exports.messagesRouter = messagesRouter;
