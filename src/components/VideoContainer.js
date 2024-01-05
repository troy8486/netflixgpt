import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoContainer = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movie_id);

  return (
    trailerVideo&&(
      <div className="">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo[0]?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
    )

  );
};

export default VideoContainer;
