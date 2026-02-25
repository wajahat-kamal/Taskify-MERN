// store/Provider.tsx
"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import AuthInitializer from "./AuthInitializer";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <AuthInitializer />
            {children}
        </Provider>
    );
}