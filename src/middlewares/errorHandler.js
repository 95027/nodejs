const errorHandler = async (err, req, res, next) => {
  console.log(err);

  const status = err.statusCode || 500;
  const message = err.message || "An unexpected error occured";

  res.status(status).json({ message });
};

module.exports = errorHandler;
