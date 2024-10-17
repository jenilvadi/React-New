import { createSlice } from "@reduxjs/toolkit";
export const count = createSlice({
    name: "count",
    initialState: {
        Taskmanager: []
},
reducers :{
    AddData:(state,action)=>{
    state.Taskmanager.push(action.payload)
    },
    DeleteData:(state,action)=>{
    let data = state.Taskmanager.filter((e)=>e.id != action.payload)
    state.Taskmanager=data
    },
    UpdateData:(state,action)=>{
    state.Taskmanager.map((e)=>{
        if(e.id == action.payload.id){
            e.name = action.payload.name
            e.email = action.payload.email
            e.gender = action.payload.gender
            e.task = action.payload.task
            e.prio = action.payload.prio
    }else{
        e
    }
    })
    }
}
})

export const {AddData,UpdateData,DeleteData} = count.actions
export default count.reducer;