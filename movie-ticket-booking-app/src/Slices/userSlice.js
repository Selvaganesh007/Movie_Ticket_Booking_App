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

        },

        setCity(state,action) {
            state.city = action.payload;
        }
    }
});

export const { setUser, setCity } = userSlice.actions;

export default userSlice.reducer;