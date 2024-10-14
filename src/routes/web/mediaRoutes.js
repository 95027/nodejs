const { avatar, product } = require("../../controllers/web/mediaController");
const { avatarUpload } = require("../../utils/multer");

const router = require("express").Router();

router.post("/avatar", avatarUpload.single("avatar"), avatar);
router.post(
  "/product",
  avatarUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "images", maxCount: 3 },
  ]),
  product
);

module.exports = router;
