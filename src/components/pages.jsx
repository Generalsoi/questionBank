import React from "react";
import { Link } from "react-router-dom";

export const Pages = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-8 bg-black text-white font-roboto">
      <Link to="/studentquestions">
        <button className="w-40  h-9 2xl:w-60 2xl:h-12 flex items-center justify-center border rounded-lg border-white hover:bg-white hover:text-black">
          IT Student of the Year
        </button>
      </Link>
      <Link to="/questions">
        <button className="w-40  h-9 2xl:w-60 2xl:h-12 flex items-center justify-center border rounded-lg border-white hover:bg-white hover:text-black">
          IT School of the Year
        </button>
      </Link>
    </div>
  );
};
