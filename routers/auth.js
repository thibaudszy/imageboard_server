const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/", async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.send("Please enter a username and password");
  }
  // normally we would check the password and find the correct user in the database
  res.send({
    jwt: toJWT({ userId: 1 }),
  });
});

module.exports = router;
