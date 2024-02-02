import ErrorResponse from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorResponse("Please log in", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("Invalid Session", 401));
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorResponse("Access denied, you must an admin", 401));
  }
  next();
};

export { isAuthenticated, isAdmin };
