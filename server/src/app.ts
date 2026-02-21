import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import taskRouter from './routes/task.route.js';
import { protect } from './middlewares/protect.middleware.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/tasks', protect, taskRouter);

app.get("/", (req, res) => {
    res.json("Hello World!")
})

export default app;