import React from "react";
import Typewriter from "typewriter-effect";

export const Homepage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white font-roboto gap-5">
      <h1 className="font-bold text-lg md:text-2xl text-center uppercase">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome to IT School Of The Year").start();
          }}
        />
      </h1>
      <button className="w-40 h-9 flex items-center justify-center border rounded-lg border-white">
        Next
      </button>
    </div>
  );
};
