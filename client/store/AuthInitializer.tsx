import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from './slices/authSlice';

function AuthInitializer() {
    const dispatch = useDispatch()
    useEffect(() => {

        axios.get(
            // `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
            "http://localhost:8000/auth/me",
            { withCredentials: true }
        ).then((res) => dispatch(setUser({ user: res.data.user }))).catch(() => { });
    })
    return null
}

export default AuthInitializer