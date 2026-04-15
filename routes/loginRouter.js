const loginRouter = require("express").Router();
const loginController = require("../controllers/loginController");

// ==========================================================================
// get routes
// ==========================================================================
loginRouter.get("/", loginController.getLogin);

// ==========================================================================
// post routes
// ==========================================================================
loginRouter.post("/", loginController.postLogin);

module.exports.loginRouter = loginRouter;
