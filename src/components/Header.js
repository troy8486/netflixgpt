import React from "react";
import img from "../assets/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-40"
        src={img}
        alt="logo"
      />
    </div>
  );
};

export default Header;
