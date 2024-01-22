import { createSlice } from "@reduxjs/toolkit";

 const movieSlice= createSlice({
    name:"movies",
    initialState:{
       NowPlayingMovies:null
    },
     reducers:{
        addmovies:(state,action)=>{
              state.NowPlayingMovies=action.payload
        }
     }
 })
   export const {addmovies}=movieSlice.actions;
  export default movieSlice.reducer;