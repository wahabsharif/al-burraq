import React from "react";

const ButtonRed = ({
  text,
  handleClick,
  width,
}: {
  text: string;
  handleClick: any;
  width: string;
}) => {
  return (
    <button
      className={`${
        width === "full" ? "w-full" : "w-40"
      }  bg-darkGold hover:bg-slate-700 transition-all tracking-wider rounded p-3 text-lightGold font-extrabold`}
      style={{ padding: ".6rem" }}
      onClick={handleClick}
    >
      <i className="fa-solid fa-search "></i> {text}
    </button>
  );
};

export default ButtonRed;
