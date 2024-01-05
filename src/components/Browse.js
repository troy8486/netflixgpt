import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useOnTV from "../hooks/useOnTV";
import useTopTV from "../hooks/useTopTV.js";

const Browse = () => {  
    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useOnTV();
    useTopTV();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;