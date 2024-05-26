import express from 'express';
import { protectRoute, isAdminRoute } from '../middlewares/authMiddlewave';
import {
  // createSubTask,
  createTask,
  // dashboardStatistics,
  // deleteRestoreTask,
  // duplicateTask,
  // getTask,
  // getTasks,
  // postTaskActivity,
  // trashTask,
  // updateTask,
} from '../controllers/taskController';


const router = express.Router();

router.post("/create", createTask);
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

export default router;
