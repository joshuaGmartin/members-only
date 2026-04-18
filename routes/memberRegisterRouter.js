const memberRegisterRouter = require("express").Router();
const memberRegisterController = require("../controllers/memberRegisterController");
const middleware = require("../middleware/middleware");

// ==========================================================================
// get routes
// ==========================================================================
memberRegisterRouter.get("/", memberRegisterController.getMemberRegister);
memberRegisterRouter.get(
  "/member-success",
  middleware.isMemberCheck,
  memberRegisterController.getMemberRegisterSuccess,
);

// ==========================================================================
// post routes
// ==========================================================================
memberRegisterRouter.post("/", memberRegisterController.postMemberRegister);

module.exports.memberRegisterRouter = memberRegisterRouter;
