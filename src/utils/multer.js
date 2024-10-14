const multer = require("multer");
const fs = require("fs");


function createDirIfNot(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
  }
}

function getDestination(folder) {
  return (req, file, cb) => {
    const dir = `uploads/${folder}`;
    createDirIfNot(dir);
    cb(null, dir);
  };
}

function generateFilename() {
  return (req, file, cb) => {
    const filename = Date.now() + '.' + file.originalname;
    cb(null, filename);
  };
}

const avatarStorage = multer.diskStorage({
  destination: getDestination("avatar"),
  filename: generateFilename(),
});

const productStorage = multer.diskStorage({
    destination: getDestination('products'),
    filename: generateFilename(),
})

const avatarUpload = multer({ storage: avatarStorage });
const productUpload = multer({storage: productStorage});

module.exports = {
    avatarUpload,
    productUpload,
};
