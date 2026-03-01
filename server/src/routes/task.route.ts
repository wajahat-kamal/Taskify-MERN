import express from "express"
import { createTask, deleteTask, getTaskStats, getTasks, updateTask } from "../controllers/task.controller.js";

const taskRouter = express.Router()

taskRouter.post("/create-task", createTask)
taskRouter.get("/all-tasks", getTasks)
taskRouter.delete("/delete-task/:id", deleteTask)
taskRouter.put("/update-task/:id", updateTask)
taskRouter.get("/task-stats", getTaskStats)

export default taskRouter;