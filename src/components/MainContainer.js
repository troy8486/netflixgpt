import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const movie = movies[0];

  return (
    <div>
        <VideoTitle title={movie.title} desc={movie.overview}/>
        <VideoContainer movie_id={movie.id}/>
    </div>
  );
};

export default MainContainer;
