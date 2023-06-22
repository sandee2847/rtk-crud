import {configureStore} from "@reduxjs/toolkit";
import { Adminapi } from "../Api/AdminSlice";
export const store=configureStore({
    reducer:{
        [Adminapi.reducerPath]:Adminapi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(Adminapi.middleware),
});