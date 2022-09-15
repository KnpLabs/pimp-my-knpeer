import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from '../features/avatar/avatarSlice'

export const store = configureStore({
    reducer: {
        avatar: avatarReducer
    }
})
