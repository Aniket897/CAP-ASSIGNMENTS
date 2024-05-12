const router = require("express").Router();
const movieRouter = require("./movie");

router.use("/movie" , movieRouter);

module.exports = router;