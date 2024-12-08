import { createSlice } from "@reduxjs/toolkit";

const admissionCategorySlice = createSlice({
    name:"admissionCategory",
    initialState:{
        data:[],
        government:false,
        private:false,
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload;
        },
        setGovernment:(state)=>{
         state.government = true;
         state.private = false
        },
        setPrivate:(state)=>{
            state.private = true
            state.government = false
        },
        setDefault:(state)=>{
            state.government = false;
            state.private = false;
        }
    }
})

export default admissionCategorySlice.reducer;
export const {setGovernment,setPrivate,setDefault,setData} = admissionCategorySlice.actions