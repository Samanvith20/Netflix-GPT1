import { createSlice } from "@reduxjs/toolkit";

 const GptSlice=createSlice({
    name:"Gpt",
      initialState:{
        showGptSearch:false
      },
      reducers:{
        addToogle:(state,)=>{
            state.showGptSearch=!state.showGptSearch
        }
      }
 })
  export const {addToogle}=GptSlice.actions
  export default GptSlice.reducer
