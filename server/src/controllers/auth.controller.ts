import User from "../models/User.js";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import type { Request, Response } from "express";
import type { LoginBody, RegisterBody } from "../types/authTypes.js";

const generateToken = (res: Response, userId: string) => {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not defined!");

  const token = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // Cookie options: dev (http://localhost) vs production (https)
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,     // localhost pe false, production pe true
    sameSite: isProduction ? "strict" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export async function createAccount(req: Request<{}, {}, RegisterBody>, res: Response) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            });
        }

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(401).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword });

        generateToken(res, user._id.toString());

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error: any) {
        console.error("Error in createAccount:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error in creating account"
        });
    }
}


export async function login(req: Request<{}, {}, LoginBody>, res: Response) {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found, please create an account"
            });
        }

        // Compare password
        const isAuthenticated = await bcryptjs.compare(password, user.password);

        if (!isAuthenticated) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials!"
            });
        }

        // Generate JWT cookie
        generateToken(res, user._id.toString());

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Error in login:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error in login"
        });
    }
}

export async function getMe(req: Request, res: Response) {
    try {
        const token = req.cookies.token;  
        if (!token) return res.status(401).json({ success: false });

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const user = await User.findById(decoded.id).select("-password");

        return res.status(200).json({ success: true, user });
    } catch {
        return res.status(401).json({ success: false });
    }
}


export async function logout(req: Request, res: Response) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    })

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}