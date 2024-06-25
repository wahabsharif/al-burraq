import React from "react";

const BotFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex flex-col items-center justify-between gap-6 p-5 border-t-2 border-slate-500 text-lightGold bg-slate-800 md:flex-row"
      id="footer"
    >
      <strong className="text-sm">
        All Rights Reserved <span className="text-darkGold">Al-Burraq</span>{" "}
        {currentYear}
      </strong>
      <strong className="text-sm">
        Designed & Developed With &#x2764; By
        <a
          href="http://beacontechh.com/"
          className="text-darkGold"
          target="_blank"
          rel="noreferrer"
        >
          Beacon Techh
        </a>
      </strong>
    </footer>
  );
};

export default BotFooter;
