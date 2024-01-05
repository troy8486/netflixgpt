import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        topMovies: null,
        upcomingMovies: null,
        onTV: null,
        topTV: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopMovies : (state, action) => {
            state.topMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addOnTV : (state, action) => {
            state.onTV = action.payload;
        },
        addTopTV : (state, action) => {
            state.topTV = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addTopMovies, addUpcomingMovies, addOnTV, addTopTV} = movieSlice.actions;

export default movieSlice.reducer;