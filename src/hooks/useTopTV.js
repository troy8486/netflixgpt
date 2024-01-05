import { useEffect } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addTopTV } from "../utils/movieSlice";

const useTopTV = () => {
  const dispatch = useDispatch();

  const getTopTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopTV(json.results));

  };

  useEffect(() => {
    getTopTV();
  }, []);
};

export default useTopTV;
