const { Router } = require("express");
const Image = require("../models/").image;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newImage = await Image.create(req.body);
    res.json(newImage);
  } catch (e) {
    next(e);
  }
});

router.get("/:imageId", async (req, res, next) => {
  try {
    const imageId = req.params.imageId;
    console.log(imageId);
    const retrievedImage = await Image.findByPk(imageId);
    res.json(retrievedImage);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
