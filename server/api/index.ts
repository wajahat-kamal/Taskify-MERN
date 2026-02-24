import dotenv from "dotenv";
import connectDB from "../src/config/db.js";
import app from "../src/app.js";

dotenv.config();

export default async function handler(req: any, res: any) {
    await connectDB();
    return app(req, res);
}