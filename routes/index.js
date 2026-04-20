const router = require("express").Router();
const homeRouter = require("./homeRouter").homeRouter;
const registerRouter = require("./registerRouter").registerRouter;
const loginRouter = require("./loginRouter").loginRouter;
const logoutRouter = require("./logoutRouter").logoutRouter;
const memberRouter = require("./memberRouter").memberRouter;
const messagesRouter = require("./messagesRouter").messagesRouter;

const middleware = require("../middleware/middleware");

// .use for mounting sub-routers
router.use("/", homeRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);
router.use(
  "/member",
  middleware.isAuthCheck,
  middleware.isMemberCheck,
  memberRouter,
);
router.use("/messages", middleware.isAuthCheck, messagesRouter);

module.exports = router;
