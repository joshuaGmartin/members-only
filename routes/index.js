const router = require("express").Router();
const homeRouter = require("./homeRouter").homeRouter;
const registerRouter = require("./registerRouter").registerRouter;
const loginRouter = require("./loginRouter").loginRouter;
const logoutRouter = require("./logoutRouter").logoutRouter;

// .use for mounting sub-routers
router.use("/", homeRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);

module.exports = router;
