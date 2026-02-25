// store/Provider.tsx
"use client";
import { useEffect } from "react";
import { store } from "./store";
import { Provider, useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./slices/authSlice";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(
            // `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
            "http://localhost:8000/auth/me", 
            {withCredentials: true}
        ).then((res) => dispatch(setUser({ user: res.data.user }))).catch(() => { });
    })

    return <Provider store={store}>{children}</Provider>;
}