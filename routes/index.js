const router = require("express").Router();
const homeRouter = require("./homeRouter").homeRouter;
const registerRouter = require("./registerRouter").registerRouter;
const loginRouter = require("./loginRouter").loginRouter;

// .use for mounting sub-routers
router.use("/", homeRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;
