import { configureStore } from "@reduxjs/toolkit";
import  money  from "../Configure/BudgetSlice";
import { depmon } from "../Configure/ManageSlice";

export const store = configureStore({
    reducer:{
        creKey : money,
        depKey : depmon.reducer
    } 
})
