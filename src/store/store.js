import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../reducer/uiReducer";
import { userReducer } from "../reducer/userReducer";


const reducers = {

    user: userReducer,
    ui  :uiReducer
    
};

export const store = configureStore({
    reducer: reducers
});