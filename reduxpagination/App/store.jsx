import { configureStore } from "@reduxjs/toolkit";
import  Slice1  from "../Features/Counterslice";
export const store = configureStore({
    reducer:{
        pageKey : Slice1
    }
})