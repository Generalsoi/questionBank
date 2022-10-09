import React, { useState } from "react";

export const Questions = () => {
  const [question, setQuestion] = useState("");

  return (
    <div className="w-full h-screen flex items-center font-roboto bg-black text-white">
      <div className="h-screen w-1/5 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 w-full border border-white h-[30%] p-3">
          <input
            type="search"
            placeholder="search number here"
            className="w-full h-8 rounded p-2 placeholder:text-sm focus:border-none text-black"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button className="w-32 h-9 border rounded-lg border-white text-sm flex items-center justify-center">
            Search
          </button>
        </div>
      </div>
      <div className="h-screen w-4/5 flex items-center justify-center">
        <div className="w-[80%] h-[80%] border border-white rounded-lg">
          question
        </div>
      </div>
    </div>
  );
};
