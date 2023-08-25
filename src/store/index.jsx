import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'
import sesionSlice from './slices/sesionSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    sesion: sesionSlice
	}
})