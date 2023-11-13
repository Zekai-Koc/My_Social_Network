import express from "express";
import {
   register,
   login,
   currentUser,
   forgotPassword,
   profileUpdate,
   findPeople,
   addFollower,
   userFollow,
} from "../controllers/authController.js";
import { requireSignin } from "../middlewares/index.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/currentuser", requireSignin, currentUser);
router.post("/forgotpassword", forgotPassword);
router.put("/profileupdate", requireSignin, profileUpdate);

router.get("/findpeople", requireSignin, findPeople);

router.put("/userfollow", requireSignin, addFollower, userFollow);

export default router;
