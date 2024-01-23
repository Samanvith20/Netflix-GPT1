import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import movieSlice from "./movieSlice"
import GptSlice from "./GptSlice"
import languageSlice from "./languageSlice"
const appStore =configureStore({
  reducer:{
     user:userSlice,
     movies:movieSlice,
     Gpt:GptSlice,
     lang:languageSlice
  }
})
 export default appStore