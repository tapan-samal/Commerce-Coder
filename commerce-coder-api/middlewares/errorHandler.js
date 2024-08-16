class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => error.message);
    message = `User validation failed: ${errors.join(", ")}`;
    statusCode = 400;
  }

  // Handle Mongoose cast errors (e.g., invalid ObjectId)
  if (err.name === "CastError") {
    err = new ErrorHandler(`Invalid ${err.path}: ${err.value}`, 400);
  }

  // Handle Mongoose duplicate key errors
  if (err.code && err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate field value: '${field}' already exists in database indexes!`;
    statusCode = 400;
  }

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default ErrorHandler;
