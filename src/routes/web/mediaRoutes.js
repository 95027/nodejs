const { avatar, product } = require("../../controllers/web/mediaController");
const { avatarUpload, productUpload } = require("../../utils/multer");

const router = require("express").Router();

router.post("/avatar", avatarUpload.single("avatar"), avatar);
router.post(
  "/product",
  productUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "images", maxCount: 3 },
  ]),
  product
);

module.exports = router;
