import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice"
import appConfigReducer from "./appConfigSlice"
const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
    appConfig: appConfigReducer
  },
});

export default appStore;
