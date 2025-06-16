import { createSlice } from "@reduxjs/toolkit";

interface appstate{
    ismenuopen: boolean
    isloading:boolean
}
const initialState:appstate={
    ismenuopen:false,
    isloading:false
}
const appslice=createSlice({
    name:"app",
    initialState,
    reducers:{
        togglemenu:(state)=>{
            state.ismenuopen = !state.ismenuopen
        }
    }
})
export const{ togglemenu } = appslice.actions
export default appslice.reducer