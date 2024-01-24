import { createSlice } from "@reduxjs/toolkit";

 const GptSlice=createSlice({
    name:"Gpt",
      initialState:{
        showGptSearch:false,
        movieName:null,
        movieResults:null
      },
      reducers:{
        addToogle:(state,)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addMovies:(state,action)=>{
           const{movieName,movieResults}=action.payload
          state.movieName=movieName
          state.movieResults=movieResults
        }
      }
 })
  export const {addToogle,addMovies}=GptSlice.actions
  export default GptSlice.reducer
