import { Router } from "express";
import {
  adminApprovedDetailsGet,
  adminApprovedDetailsPost,
  adminApprovedDetailsDelete,
} from "../controllers/adminController.js";
import { isAuthenticated } from "../middleware/auth.js";
import { isAdmin } from "../middleware/auth.js";

const router = Router();

router.get(
  "/approved-details-get",
  adminApprovedDetailsGet,
  isAuthenticated,
  isAdmin
);
router.post(
  "/approved-details-post",
  adminApprovedDetailsPost,
  isAuthenticated,
  isAdmin
);
router.delete(
  "/approved-details-delete/:id",
  adminApprovedDetailsDelete,
  isAuthenticated,
  isAdmin
);

export default router;
