const router = require("express").Router();
const homeRouter = require("./homeRouter").homeRouter;
const registerRouter = require("./registerRouter").registerRouter;
const loginRouter = require("./loginRouter").loginRouter;
const logoutRouter = require("./logoutRouter").logoutRouter;
const memberRegisterRouter =
  require("./memberRegisterRouter").memberRegisterRouter;

const middleware = require("../middleware/middleware");

// .use for mounting sub-routers
router.use("/", homeRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);
router.use("/member-register", middleware.isAuthCheck, memberRegisterRouter);

module.exports = router;
