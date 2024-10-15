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

const product = asyncHandler(async (req, res, next) => {
  if (req.files["image"]) {
    const file = req.files["image"][0];
    const image = await Media.create({
      mediable_type: "product",
      mediable_id: 1,
      filename: file.filename,
      filepath: file.path,
      filetype: file.mimetype,
      featured: 1,
    });

    if (req.files["images"]) {
      const files = req.files["images"];

      await Promise.all(
        files.map((file) => {
          Media.create({
            mediable_type: "product",
            mediable_id: 1,
            filename: file.filename,
            filepath: file.path,
            filetype: file.mimetype,
          });
        })
      );
    }

    res.status(200).json({ message: "product images uploaded successfully" });
  }
});

module.exports = {
  avatar,
  product,
};
