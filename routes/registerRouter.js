const registerRouter = require("express").Router();
const registerGuestController = require("../controllers/registerGuestController");
const registerMemberController = require("../controllers/registerMemberController");
const middleware = require("../middleware/middleware");

// ==========================================================================
// get routes
// ==========================================================================
registerRouter.get("/guest", registerGuestController.getRegisterGuest);
registerRouter.get(
  "/member",
  middleware.isAuthCheck,
  registerMemberController.getRegisterMember,
);

// ==========================================================================
// post routes
// ==========================================================================
registerRouter.post("/guest", registerGuestController.postRegisterGuest);
registerRouter.post(
  "/member",
  middleware.isAuthCheck,
  registerMemberController.postRegisterMember,
);

module.exports.registerRouter = registerRouter;
