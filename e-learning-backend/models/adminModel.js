import mongoose from "mongoose";

const adminApprovedDetailsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: [true, "User name is required"],
      maxlength: 50,
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: [true, "Phone number is required"],
      minlength: [10, "Phone number must be at least 10 characters"],
      maxlength: [10, "Phone number must be at most 10 characters"],
    },
    emailId: {
      type: String,
      trim: true,
      required: [true, "Email id is required"],
      maxlength: 50,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "adminApprovedDetails",
  adminApprovedDetailsSchema
);
