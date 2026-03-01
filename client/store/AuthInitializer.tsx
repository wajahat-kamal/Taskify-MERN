"use client"
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/authSlice";

function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        // `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
        "http://localhost:8000/api/auth/me",
        { withCredentials: true }
      )
      .then((res) => dispatch(setUser(res.data.user)))
      .catch(() => {
        // ignore if not logged in
      });
  }, []);

  return null;
}

export default AuthInitializer;