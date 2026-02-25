import express from "express"
import { createAccount, getMe, login, logout } from "../controllers/auth.controller.js"

const authRouter: express.Router = express.Router()

authRouter.post("/register", createAccount)
authRouter.post("/login", login)
authRouter.get("/logout", logout)
authRouter.get("/me", getMe)

export default authRouter;