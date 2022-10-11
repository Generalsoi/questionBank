import React, { useState } from "react";

export const Questions = () => {
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(true);
  };

  const questionBank = {
    1: {
      question: "What is 2 + 2?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "c",
    },
    2: {
      question: "What is 3 + 2?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "a",
    },
    3: {
      question: "What is 3 + 3?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "b",
    },
  };

  const questionBankJson = JSON.stringify(questionBank);
  console.log(questionBankJson);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row  items-center font-roboto bg-black text-white">
      <div className="h-screen w-full md:w-1/5 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 w-full border border-white h-[30%] p-3">
          <input
            type="search"
            placeholder="search number here"
            className="w-full h-8 rounded p-2 placeholder:text-sm focus:border-none text-black"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            className="w-32 h-9 border rounded-lg border-white text-sm flex items-center justify-center"
            onClick={handleDisplay}
          >
            Search
          </button>
        </div>
      </div>
      <div className="h-screen w-full md:w-4/5 flex items-center justify-center">
        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center border border-white rounded-lg">
          {!!display && questionBank[number].question}
          <button>Show answer</button>
        </div>
      </div>
    </div>
  );
};
