const asyncHandler = require("express-async-handler");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: "Requested user not found" });
  }

  const isValidPass = bcrypt.compare(password, user.password);

  if (!isValidPass) {
    return res.status(401).json({ message: "invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });

  return res
    .status(200)
    .json({ message: "user logged in successfully", token });
});

const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(409).json({ message: "email already exists" });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  await User.create({
    ...req.body,
    password: hashedPass,
  });

  res.status(200).json({ message: "user registered successfully" });
});

const getUserByToken = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.user);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  res.status(200).json({ message: "user fetched successfully", user});
});

module.exports = {
  login,
  register,
  getUserByToken,
};
