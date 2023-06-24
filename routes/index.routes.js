const { Router } = require("express");

const router = Router();

const tvRouter = require("./tvshows.routes");
router.use("/tvshows", tvRouter);

module.exports = router;
