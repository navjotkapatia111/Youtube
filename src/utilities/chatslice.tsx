import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Offset_live_chat } from "./constants";
interface Message{
    name:string
    message:string
}
interface chatstate{
    messages:Message[]
}
const initialState:chatstate={
    messages:[]
}
const Chatslice=createSlice({
    name:'chat',
    initialState,
    reducers:{
        addmessage:(state,action:PayloadAction<Message>)=>{
            state.messages.splice(Offset_live_chat)
            state.messages.push(action.payload)
        }
    }
})
export const {addmessage} = Chatslice.actions
export default Chatslice.reducer