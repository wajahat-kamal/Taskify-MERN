import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import { protect } from './middlewares/protect.middleware.js';
import taskRouter from './routes/task.route.js';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

connectDB() // Connect to MongoDB

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth/", authRouter)
app.use("/api/tasks/", protect, taskRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/protect', protect , (req, res) => {
    res.send('Protected Route!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});