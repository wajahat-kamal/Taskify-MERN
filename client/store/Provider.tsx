// store/Provider.tsx
"use client";
import { RootState, store } from "./store";
import { Provider, useSelector } from "react-redux";
import AuthInitializer from "./AuthInitializer";
import Loader from "@/components/Loader";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    // const { loading } = useSelector((state: RootState) => state.auth)
    return (
        <Provider store={store}>
            <AuthInitializer />
            {children}
        </Provider>
    );
}