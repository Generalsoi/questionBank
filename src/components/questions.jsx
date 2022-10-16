import React, { useState } from "react";

export const Questions = () => {
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState(false);
  const [answer, setAnswer] = useState(false);

  const handleDisplay = (e) => {
    const currentNumber = number;
    setDisplay(true);
    setAnswer();
    let selectedNumbers = [];
    localStorage.setItem(
      "selectedNos",
      JSON.stringify([...selectedNumbers, currentNumber])
    );
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
    4: {
      question: "What is 2 + 3?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "b",
    },
    5: {
      question: "What is 2 + 2?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "c",
    },
    6: {
      question: "What is 3 + 2?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "a",
    },
    7: {
      question: "What is 3 + 3?",
      options: {
        a: 5,
        b: 6,
        c: 4,
        d: 3,
      },
      answer: "b",
    },
    8: {
      question: "What is 2 + 3?",
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
        <div className="flex flex-col items-center justify-center gap-8 w-[80%] md:w-full border border-white h-[50%] md:h-[30%] p-3">
          <input
            type="number"
            placeholder="search number here"
            className="w-[80%] md:w-full h-10 md:h-8 rounded p-2 placeholder:text-sm focus:border-none text-black"
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
          {!!display && (
            <>
              <h4 className="text-3xl">{questionBank[number]?.question}</h4>
              <ul>
                <li className="flex gap-3 items-center">
                  <p>a.</p>
                  {questionBank[number]?.options.a}
                </li>
                <li className="flex gap-3 items-center">
                  <p>b.</p>
                  {questionBank[number]?.options.b}
                </li>
                <li className="flex gap-3 items-center">
                  <p>c.</p>
                  {questionBank[number]?.options.c}
                </li>
                <li className="flex gap-3 items-center">
                  <p>d.</p>
                  {questionBank[number]?.options.d}
                </li>
              </ul>
            </>
          )}
          {!!display &&
            (!answer ? (
              <button
                className="mt-4 w-32 h-9 border rounded-lg border-white text-sm flex items-center justify-center"
                onClick={() => setAnswer(true)}
              >
                Show answer
              </button>
            ) : (
              <button
                className="mt-4 w-32 h-9 border rounded-lg border-white text-sm flex items-center justify-center"
                onClick={() => setAnswer(false)}
              >
                Hide answer
              </button>
            ))}

          <div className="text-xl">
            {answer && `The answer is: ${questionBank[number]?.answer}`}
          </div>
        </div>
      </div>
    </div>
  );
};
