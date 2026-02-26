import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    loading: boolean;
}

const loadUser = (): User | null => {
    try {
        const serialized = localStorage.getItem("user")
        return serialized ? JSON.parse(serialized) : null;
    } catch (error) {
        return null;
    }
}

const initialState: AuthState = {
    user: loadUser(),
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user")
        }
    }
})

export const { setUser, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;