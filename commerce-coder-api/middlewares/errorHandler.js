class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (err.name === "CastError") {
    err = new ErrorHandler(`Invalid ${err.path}: ${err.value}`, 400);
  }

  return res.status(statusCode).json({
    success: false,
    message: err.message || message,
  });
};

export default ErrorHandler;
