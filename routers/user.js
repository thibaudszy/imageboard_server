const { Router } = require("express");
const user = require("../models/").user;
const router = new Router();

router.get("/", (request, response) => response.send("user Router"));

module.exports = router;
