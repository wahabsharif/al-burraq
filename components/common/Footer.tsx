import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-between gap-6 p-16 text-white border-t-2 border-red-500 bg-slate-800 md:flex-row"
      id="footer"
    >
      <strong className="text-xl md:text-2xl lg:text-3xl">
        All Rights Reserved &#174;
      </strong>
      {/* <strong className="text-xl md:text-2xl lg:text-3xl">
        Made With &#x2764; By
        <a
          href="//github.com/heyitsuzair"
          className="text-darkGold"
          target="_blank"
          rel="noreferrer"
        >
          {""} UZAIR
        </a>
      </strong> */}
    </footer>
  );
};

export default Footer;
