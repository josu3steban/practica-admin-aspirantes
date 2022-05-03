import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/userReducer";


const reducers = {

    user: userReducer
    
};

export const store = configureStore({
    reducer: reducers
});