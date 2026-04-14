const registerRouter = require("express").Router();
const registerController = require("../controllers/registerController");

// ==========================================================================
// get routes
// ==========================================================================
registerRouter.get("/", registerController.getRegister);

// ==========================================================================
// post routes
// ==========================================================================
registerRouter.post("/", registerController.postRegister);

module.exports.registerRouter = registerRouter;
