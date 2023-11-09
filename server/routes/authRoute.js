import express from "express";
import {
   register,
   login,
   currentUser,
   forgotPassword,
} from "../controllers/authController.js";
import { requireSignin } from "../middlewares/index.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/currentuser", requireSignin, currentUser);
router.post("/forgotpassword", forgotPassword);

export default router;
