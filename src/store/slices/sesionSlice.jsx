import { createSlice } from '@reduxjs/toolkit';

const sesionSlice = createSlice({
  name: 'sesion',
  initialState: {
    token: null,
    // otras propiedades iniciales...
  },
  reducers: {
    setSesionInfo: (state, action) => {
      state.token = action.payload.token;
      // otras actualizaciones de propiedades...
    },
  },
});

export const { setSesionInfo } = sesionSlice.actions;
export default sesionSlice.reducer;
