import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="bg-red-50 text-darkGold rounded-full px-7 py-1">
      {text}
    </span>
  );
};

export default Badge;
