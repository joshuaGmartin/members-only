const memberRegisterRouter = require("express").Router();
const memberRegisterController = require("../controllers/memberRegisterController");

// ==========================================================================
// get routes
// ==========================================================================
memberRegisterRouter.get("/", memberRegisterController.getMemberRegister);

// ==========================================================================
// post routes
// ==========================================================================
memberRegisterRouter.post("/", memberRegisterController.postMemberRegister);

module.exports.memberRegisterRouter = memberRegisterRouter;
