import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/authSlice";
import { IUser } from "@/types/userType";  

function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        // `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
        "http://localhost:8000/auth/me",
        { withCredentials: true }
      )
      .then((res) => dispatch(setUser({ user: res.data.user as IUser })))
      .catch(() => {
        // ignore if not logged in
      });
  }, []);

  return null;
}

export default AuthInitializer;