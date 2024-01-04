import { options } from "../constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const trailer = json.results.filter(
      (video) => video.name === "Official Teaser Trailer"
    );
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getVideo();
  }, []);
};

export default useTrailerVideo;
