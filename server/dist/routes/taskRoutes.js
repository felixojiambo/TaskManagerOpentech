"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const router = express_1.default.Router();
router.post("/create", taskController_1.createTask);
// router.post("/duplicate/:id", isAdminRoute, duplicateTask);
// router.post("/activity/:id",  postTaskActivity);
//router.get("/dashboard", protectRoute, dashboardStatistics);
//router.get("/", protectRoute, getTasks);
//router.get("/:id", protectRoute, getTask);
// router.put("/create-subtask/:id", protectRoute, isAdminRoute, createSubTask);
// router.put("/update/:id", protectRoute, isAdminRoute, updateTask);
// router.put("/:id", protectRoute, isAdminRoute, trashTask);
// router.delete(
//   "/delete-restore/:id?",
//   protectRoute,
//   isAdminRoute,
//   deleteRestoreTask
// );
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map