import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: null | { name: string, email: string };
    token: null | string;
}

const initialState: AuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem("token", action.payload.token ?? "")
        },
        logout: (state) => {
            state.user = null;
            state.token = null;

            localStorage.removeItem("token")
        }
    }
})

export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;