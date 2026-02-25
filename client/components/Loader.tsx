"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; // Redux store types

export default function Loader() {
  const loading = useSelector((state: RootState) => state.auth.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
    </div>
  );
}