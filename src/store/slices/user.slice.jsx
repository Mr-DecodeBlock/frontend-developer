import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
	name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            const newUser = action.payload;
            return newUser
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;