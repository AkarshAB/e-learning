import adminApprovedDetails from "../models/adminModel.js";

const adminApprovedDetailsGet = async (req, res, next) => {
  try {
    const approvedDetails = await adminApprovedDetails.find();
    res.json({
      success: true,
      msg: "Details added to the approved list",
      approvedDetails,
    });
  } catch (error) {
    next(error);
  }
};

const adminApprovedDetailsPost = async (req, res, next) => {
  const { details } = req.body;
  try {
    const insertedDetails = await adminApprovedDetails.insertMany(
      details.map((detail) => ({
        userName: detail.userName,
        phoneNumber: detail.phoneNumber,
        emailId: detail.emailId,
      }))
    );
    res.status(201).json({
      success: true,
      msg: "Details added to the approved list",
      insertedDetails,
    });
  } catch (error) {
    next(error);
  }
};

const adminApprovedDetailsDelete = async (req, res, next) => {
  const { id } = req.params;
  try {
    await adminApprovedDetails.findByIdAndRemove(id);
    res
      .status(201)
      .json({ success: true, msg: "Details removed from the approved list" });
  } catch (error) {
    next(error);
  }
};

export {
  adminApprovedDetailsGet,
  adminApprovedDetailsPost,
  adminApprovedDetailsDelete,
};
