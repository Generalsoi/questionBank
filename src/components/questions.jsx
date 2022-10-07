import React from "react";

export const Questions = () => {
  return (
    <div className="w-full h-screen flex items-center bg-black text-white">
      <div className="h-screen w-1/5 border border-r-white flex flex-col p-10">
        <input type="search" placeholder="search number here" />
        <button>Search</button>
      </div>
      <div className="h-screen w-4/5 flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-white rounded-lg">
          question
        </div>
      </div>
    </div>
  );
};
