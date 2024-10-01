const router = require("express").Router();

const webRoutes = require("./web");

router.use("/", webRoutes);

module.exports = router;
