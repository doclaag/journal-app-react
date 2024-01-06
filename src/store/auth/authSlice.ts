import { createSlice } from '@reduxjs/toolkit';



type InitialState = {
    status: string;
    uid: string | null;
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    errorMessage?: string | null;
};

const initialState: InitialState = {
    status: 'checking', // 'not.authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        checkingCredentials: (state, action) => {

        },
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;