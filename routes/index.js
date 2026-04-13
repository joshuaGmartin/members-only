const router = require("express").Router();
const homeRouter = require("./homeRouter").homeRouter;

router.get("/", homeRouter);

module.exports = router;
