import { createSlice } from "@reduxjs/toolkit";

 const movieSlice= createSlice({
    name:"movies",
    initialState:{
       NowPlayingMovies:null,
       addTrailerVideo:null,
       addpopularVideos:null,
       addTopRatedMovies:null,
       addUpcomingMovies:null
    },
     reducers:{
        addmovies:(state,action)=>{
              state.NowPlayingMovies=action.payload
        },
        addtrailer:(state,action)=>{
            state.addTrailerVideo=action.payload
        },
        addpopular:(state,action)=>{
          state.addpopularVideos=action.payload
        },
        addTopRated:(state,action)=>{
            state.addTopRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
         state.addUpcomingMovies=action.payload
        }
     }
 })
   export const {addmovies,addtrailer,addpopular,addTopRated,addUpcomingMovies}=movieSlice.actions;
  export default movieSlice.reducer;