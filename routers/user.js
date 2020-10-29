const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/").user;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 2, 15);
    const offset = req.query.offset || 0;
    User.findAndCountAll({ limit, offset })
      .then((result) => res.send({ images: result.rows, total: result.count }))
      .catch((error) => next(error));

    // const users = await User.findAll();
    // res.json(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    switch (true) {
      case !fullName:
        res.status(401).send("I need a valid full name");
        return;
      case !email:
        res.status(401).send("I need an email");
        return;
      case !password:
        res.status(401).send("Give me a password you dimwit");
        return;
    }

    const newUser = await User.create({
      email,
      // Here, when handing down the password to the create method we hash it.
      password: bcrypt.hashSync(password, 10),
      fullName,
    });
    const { password: myPassword, id, ...restOfUser } = newUser.dataValues;
    res.json(restOfUser);
  } catch (e) {
    next(e);
  }
});

// router.put("/:userId", async (req, res, next) => {
//   try {
//     const userId = req.params.userId;
//     const userToUpdate = await User.findByPk(userId);
//     if (!userToUpdate) {
//       return res.status(404).send("User not found");
//     }
//     const updatedUser = await userToUpdate.update(req.body);
//     res.json(updatedUser);
//   } catch (e) {
//     next(e);
//   }
// });
