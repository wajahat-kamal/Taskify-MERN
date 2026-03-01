import type { Request, Response } from "express";
import type { ITask } from "../models/Task.js";
import Task from "../models/Task.js";

export async function createTask(req: Request<{}, {}, ITask>, res: Response) {
    try {
        const { title, description, priority } = req.body;

        if (!title || !description || !priority) {
            return res.status(401).json({
                success: false,
                message: "Title, Desc and Priority must be required!"
            })
        }

        const task: ITask = await Task.create({ userId: req.user._id, title, description, priority })

        return res.status(201).json({
            success: true,
            message: "Task Created!",
            task
        })

    } catch (error) {
        console.error("Error in createTask:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error in creating task"
        });
    }
}

export async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await Task.find({ userId: req.user!._id }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            tasks
        });

    } catch (error) {
        console.error("Error in getTasks:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error in fetching tasks"
        });
    }
}

export async function deleteTask(req: Request<{ id: string }>, res: Response) {
    try {
        const task = await Task.findOne({ _id: req.params.id, userId: req.user!._id });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }

        await task.deleteOne()

        return res.status(200).json({
            success: true,
            message: "Task deleted!"
        })
    } catch (error) {
        console.error("Error in deleteTask:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error in deleting task"
        });
    }
}

export async function updateTask(req: Request<{ id: string }>, res: Response) {
    try {
        const task = await Task.findOne({_id: req.params.id, userId: req.user!._id})
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }

        await task.updateOne({ $set: req.body })

        return res.status(200).json({
            success: true,
            message: "Task updated!"
        })

    } catch (error) {
        console.error("Error in updateTask:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error in updating task"
        });
    }
}

export async function getTaskStats(req: Request, res: Response) {
    try {
        const totalTasks = await Task.countDocuments({ userId: req.user._id })
        const pendingTasks = await Task.countDocuments({ userId: req.user._id, completed: false })
        const completedTasks = await Task.countDocuments({ userId: req.user._id, completed: true })

        return res.status(200).json({
            success: true,
            stats: {
                totalTasks,
                pendingTasks,
                completedTasks
            }
        })
    } catch (error) {
        console.error("Error in getTaskStats:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error in fetching task stats"
        });
    }
}