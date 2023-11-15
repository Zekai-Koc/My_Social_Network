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
   userFollowing,
   removeFollower,
   userUnfollow,
   searchUser,
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
router.put("/userunfollow", requireSignin, removeFollower, userUnfollow);
router.get("/userfollowing", requireSignin, userFollowing);

router.get("/searchuser/:query", searchUser);

export default router;
