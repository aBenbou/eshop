import express from "express";
import { changePassword, getMyProfile, login, logOut, signup, updateProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/new", signup);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logOut);


// Updating Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
// router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

// Forget Password & Reset Password
// router.route("/forgetpassword").post(forgetpassword).put(resetpassword);


export default router;