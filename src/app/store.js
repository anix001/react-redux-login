import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    //if we use the rtk query then we have to use middleware
    middleware: getDefaultMiddleware =>
     getDefaultMiddleware().concat(apiSlice.middleware),
    //if in production mode we have to false the devTools
    devTools: true
})