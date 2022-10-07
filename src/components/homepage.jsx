import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const Homepage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 6000);
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white font-roboto gap-5">
      <h1 className="font-bold text-lg md:text-2xl text-center uppercase">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome to IT School Of The Year").start();
          }}
        />
      </h1>
      {show && (
        <Link to="/questions">
          <button className="w-40 h-9 flex items-center justify-center border rounded-lg border-white hover:bg-white hover:text-black">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};
