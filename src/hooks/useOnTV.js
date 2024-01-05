import { useEffect } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addOnTV } from "../utils/movieSlice";

const useOnTV = () => {
  const dispatch = useDispatch();

  const getOnTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addOnTV(json.results));

  };

  useEffect(() => {
    getOnTV();
  }, []);
};

export default useOnTV;
