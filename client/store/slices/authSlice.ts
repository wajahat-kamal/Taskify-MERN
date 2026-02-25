import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: null | { name: string, email: string };
}

const initialState: AuthState = {
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;