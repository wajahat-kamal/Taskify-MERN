import express from 'express';
import cors from "cors"
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import taskRouter from './routes/task.route.js';
import { protect } from './middlewares/protect.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "https://taskify-wk.vercel.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
// app.use(cors())

app.use('/auth', authRouter);
app.use('/tasks', protect, taskRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Taskify API is running"
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

export default app;