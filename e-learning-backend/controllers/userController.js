import adminApprovedDetails from "../models/adminModel.js";
import userList from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";
import { config } from "dotenv";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

config();

const signup = async (req, res, next) => {
  const { emailId, role } = req.body;
  const approvedEmail = await adminApprovedDetails.findOne({ emailId });
  const userExist = await userList.findOne({ emailId });

  if (!approvedEmail && role !== "admin") {
    return next(new ErrorResponse("Email not approved for registration", 400));
  }
  if (userExist) {
    return next(new ErrorResponse("E-mail Id already registered", 400));
  }
  try {
    const user = await userList.create(req.body);
    res.status(201).json({
      success: true,
      msg: "E-mail has been Registered",
      user,
    });
  } catch (error) {
    return next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId) {
      return next(new ErrorResponse("Please add an E-mail Id", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Please add a Password", 403));
    }
    const user = await userList.findOne({ emailId });
    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }
    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = async (user, statusCode, res) => {
  const token = await user.getJwtToken(user.email);
  res
    .status(statusCode)
    .cookie("token", token, { maxAge: 3600000, httpOnly: true })
    .json({
      success: true,
      token,
    });
};

const resetPasswordLink = async (req, res, next) => {
  const { emailId } = req.body;

  try {
    const user = await userList.findOne({ emailId });
    if (!user) {
      return next(new ErrorResponse("No user has been found", 404));
    }
    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    const resetLink = `https://localhost:3000/reset-password?id=${user._id}&token=${token}`;
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: user.emailId,
      subject: "Password Reset",
      html: `
        <h2>EduGrowth Learning</h2>\n
        <p>Click the following link to reset your password: ${resetLink}</p>\n
        <p>Also note that the link will expire within the specified time.</p>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return next(error);
      } else {
        res.status(201).json({
          success: true,
          msg: "Email for resetting your password has been sent",
          token,
        });
      }
    });
  } catch (error) {
    return next(error);
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
  pool: true,
});

const resetPasswordFromLink = async (req, res, next) => {
  const { id, token, password } = req.body;
  try {
    const user = await userList.findById({ _id: id });
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      console.log(decoded.id);
      if (err) {
        return next(new ErrorResponse("Invalid Session", 400));
      }
      if (decoded.id !== id) {
        return next(new ErrorResponse("Invalid Request", 401));
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.save();

      res.status(200).json({
        success: true,
        msg: "Password has been successfully reset",
        user,
      });
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

const userProfile = async (req, res, next) => {
  const user = await userList.findById(req.user._id).select("-password");
  res.status(200).json({
    success: true,
    user,
  });
};

export {
  signup,
  signin,
  logout,
  resetPasswordLink,
  resetPasswordFromLink,
  userProfile,
};
