const notFound = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found!`);
  res.status(404); 
  next(error);
};

const errHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    status: statusCode,
    message: error.message,
  });
};

module.exports = {
  notFound,
  errHandler,
};
