import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    city: ''
};

export const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = {...action.payload};
        },

        logout(state, action) {
            state.user = {};
        },

        setCity(state,action) {
            state.city = action.payload;
        }
    }
});

export const { setUser, setCity, logout } = userSlice.actions;

export default userSlice.reducer;