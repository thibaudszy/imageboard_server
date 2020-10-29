const { Router } = require("express");
const image = require("../models/").image;
const router = new Router();

router.get("/", (request, response) => response.send("image Router"));

module.exports = router;
