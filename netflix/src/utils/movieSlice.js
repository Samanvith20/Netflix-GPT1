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
        addtrailer:(state,actions)=>{
            state.addTrailerVideo=actions.payload
        },
        addpopular:(state,action)=>{
          state.addpopularVideos=action.payload
        },
        addTopRated:(state,actions)=>{
            state.addTopRatedMovies=actions.payload
        },
        addUpcomingMovies:(state,action)=>{
         state.addUpcomingMovies=action.payload
        }
     }
 })
   export const {addmovies,addtrailer,addpopular,addTopRated,addUpcomingMovies}=movieSlice.actions;
  export default movieSlice.reducer;