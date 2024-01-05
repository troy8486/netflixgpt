import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useOnTV from "../hooks/useOnTV";
import useTopTV from "../hooks/useTopTV";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useOnTV();
  useTopTV();
  const gptSearchState = useSelector((store) => store.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {gptSearchState ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
