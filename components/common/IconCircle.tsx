import React from "react";

const IconCircle = ({ icon }: { icon: string }) => {
  return (
    <div className="rounded-full bg-red-50 p-5">
      <i className={`${icon} text-semilarge text-darkGold`}></i>
    </div>
  );
};

export default IconCircle;
