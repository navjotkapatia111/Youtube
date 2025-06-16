import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface chatstate{
    message:string[]
}
const initialState:chatstate={
    message:[]
}
export const Chatslice=createSlice({
    name:'chat',
    initialState,
    reducers:{
        addmessage:(state,action:PayloadAction<string>)=>{
            state.message.push(action.payload)
        }
    }
})
export const {addmessage} = Chatslice.actions
export default Chatslice.reducer