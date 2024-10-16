const { login, register, getUserByToken } = require("../../controllers/web/authController");
const { googleLogin } = require("../../controllers/web/socialAuthController");
const auth = require("../../middlewares/web/authMiddleware");

const router = require("express").Router();

router.post("/login", login);
router.post("/google", googleLogin);
router.post("/register", register);
router.get("/getUserByToken", auth, getUserByToken);
   
module.exports = router;
