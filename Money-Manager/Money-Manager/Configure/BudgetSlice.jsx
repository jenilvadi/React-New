import { createSlice } from "@reduxjs/toolkit";
import { DepMoney } from "./ManageSlice"; // Import the correct action

export const money = createSlice({
    name: "money",
    initialState: {
        amount: 0,
    },
    reducers: {
        addMoney(state, action) {
            console.log(action.payload);
            state.amount += Number(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(DepMoney, (state, action) => {
            state.amount -= action.payload.deb; 
        });
    }
});

export const { addMoney } = money.actions;
export default money.reducer;
