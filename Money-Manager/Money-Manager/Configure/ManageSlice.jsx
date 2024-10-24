import { createSlice } from "@reduxjs/toolkit";

export const depmon = createSlice({
    name: "depmon",
    initialState: {
        depmoney: []
    },
    reducers: {
        DepMoney: (state, action) => {
            console.log(action.payload);
            state.depmoney.push(action.payload);
        }
    }
});

export const { DepMoney } = depmon.actions;
export default depmon.reducer;
