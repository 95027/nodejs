const { login, register, getUserByToken } = require("../../controllers/web/authController");
const auth = require("../../middlewares/web/authMiddleware");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/getUserByToken", auth, getUserByToken);
   
module.exports = router;
