import React from "react";
import UserPopover from "./UserPopover";

interface PropTypes {
  canvasHidden: boolean;
  setCanvasHidden: any;
  setIsSearchVisible: any;
  isSearchVisible: boolean;
}

const NavIcons = ({
  setCanvasHidden,
  canvasHidden,
  setIsSearchVisible,
  isSearchVisible,
}: PropTypes) => {
  return (
    <>
      <div
        className="px-4 py-3 transition-all ease-in-out rounded-full shadow-2xl text-lightGold hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800"
        onClick={() => setIsSearchVisible(!isSearchVisible)}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <UserPopover />
      <a
        className="px-4 py-3 rounded-full shadow-2xl md:hidden lg:hidden text-lightGold hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800"
        onClick={() => setCanvasHidden(!canvasHidden)}
      >
        <i className="fa-sharp fa-solid fa-bars"></i>
      </a>
    </>
  );
};

export default NavIcons;
