import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI not defined!")
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`MongoDB Connection Error: ${error.message}`);
        } else {
            console.error("Unknown MongoDB connection error");
        }
        process.exit(1); // Stop server on DB connection failure
    }
};

export default connectDB;
