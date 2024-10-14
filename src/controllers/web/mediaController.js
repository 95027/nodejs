const asyncHandler = require("express-async-handler");
const { Media, User } = require("../../models");

const avatar = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const media = await Media.create({
      mediable_type: User.name,
      mediable_id: 1,
      filename: req.file.filename,
      filepath: req.file.path,
      filetype: req.file.mimetype,
    });
    res.status(200).json({ message: "avatar uploaded successfully", media });
  }
});

const product = asyncHandler(async (req, res, next) => {});

module.exports = {
  avatar,
  product,
};
