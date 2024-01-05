import React from "react";
import img from "../assets/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../constants";
import { changeLanguage } from "../utils/appConfigSlice";
import lang from "../utils/languageConstants";
const Header = () => {
  const dispatch = useDispatch();
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (event) => {
    const lang = event.target.value;
    dispatch(changeLanguage(lang));
  };
  const langKey = useSelector(store => store.appConfig?.lang)
  const showGptSearchTrue = useSelector((store) => store.gpt?.showGptSearch);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={img} alt="logo" />
      <div className="flex">
        {showGptSearchTrue && (
          <div className="p-2 ">
            <select
              onChange={(w) => handleLangChange(w)}
              className="bg-black py-2 px-4 mx-4 my-2 rounded-lg text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-sm"
                  key={lang.indentifier}
                  value={lang.indentifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="p-2">
          <button
            className="text-white bg-red-600 py-2 px-4 mx-4 my-2 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearchTrue ? lang[langKey].home : "GPT Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
