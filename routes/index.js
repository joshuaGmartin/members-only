const router = require("express").Router();
const homeRouter = require("./homeRouter").homeRouter;
const registerRouter = require("./registerRouter").registerRouter;

// .use for mounting sub-routers
router.use("/", homeRouter);
router.use("/register", registerRouter);

module.exports = router;
