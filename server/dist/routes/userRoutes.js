"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post("/register", userController_1.registerUser);
router.post("/login", userController_1.loginUser);
router.post("/logout", userController_1.logoutUser);
router.get("/get-team", userController_1.getTeamList);
//router.get("/notifications", getNotificationsList);
//router.put("/profile", protectRoute, updateUserProfile);
//router.put("/read-noti", protectRoute, markNotificationRead);
//router.put("/change-password", protectRoute, changeUserPassword);
// //   FOR ADMIN ONLY - ADMIN ROUTES
// router
//   .route("/:id")
//   .put(protectRoute, isAdminRoute, activateUserProfile)
//   .delete(protectRoute, isAdminRoute, deleteUserProfile);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map