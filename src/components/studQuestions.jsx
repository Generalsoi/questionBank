import React, { useState } from "react";

import { Quizscreen } from "./quizscreen";

export const StudQuestions = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(true);
  };

  return (
    <div className="bg-black h-screen font-roboto">
      <div className="h-[10%] flex gap-5 items-center justify-end p-4">
        <button
          className="w-40  h-9 2xl:w-60 2xl:h-12 flex items-center justify-center border rounded-lg border-white hover:bg-white text-white hover:text-black"
          onClick={handleDisplay}
        >
          Start
        </button>
      </div>

      <div className="mt-8 p-4 w-full h-[85%] flex items-center justify-center">
        <div className="w-[90%] h-full border border-white rounded-lg ">
          {display && <Quizscreen />}
        </div>
      </div>
    </div>
  );
};
