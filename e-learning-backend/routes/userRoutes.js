import { Router } from "express";
import {
  signup,
  signin,
  logout,
  resetPasswordLink,
  resetPasswordFromLink,
  userProfile,
} from "../controllers/userController.js";
import { isAuthenticated, isAdmin } from "../middleware/auth.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.post("/reset-password", resetPasswordLink);
router.post("/reset-password-from-link", resetPasswordFromLink);
router.get("/user", isAuthenticated, userProfile);

export default router;
