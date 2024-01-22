import { createSlice } from "@reduxjs/toolkit";

 const movieSlice= createSlice({
    name:"movies",
    initialState:{
       NowPlayingMovies:null,
       addTrailerVideo:null
    },
     reducers:{
        addmovies:(state,action)=>{
              state.NowPlayingMovies=action.payload
        },
        addtrailer:(state,actions)=>{
            state.addTrailerVideo=actions.payload
        }
     }
 })
   export const {addmovies,addtrailer}=movieSlice.actions;
  export default movieSlice.reducer;