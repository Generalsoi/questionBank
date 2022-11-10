import React, { useState } from "react";
import { questionBank } from "./questionBank";

// question = {question: string, options: {key, value: string, }, answer: string}
export const QuestionViewer = ({
  questionObject: { question, options, answer },
  questionNo: no,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div>
      <h4 className="text-4xl lg:text-6xl">{`${no}) ${question}`}</h4>

      <div className="w-full flex justify-center">
        <ul className="mt-8">
          {Object.entries(options).map((key, index) => (
            <li
              key={index}
              className="my-3 text-2xl lg:text-4xl"
            >{` ${key[0]}. ${key[1]}`}</li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-center">
        <button
          className="mt-4 w-36 h-9 border rounded-lg border-white text-sm flex items-center justify-center"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Hide answer" : "Show answer"}
        </button>
      </div>

      <div className="text-4xl lg:text-5xl mt-4 lg:mt-8 text-lime-600 uppercase">
        {showAnswer && `The answer is: ${answer}`}
      </div>
    </div>
  );
};

export const Questions = () => {
  const [number, setNumber] = useState(0);
  const [selectedNo, setSelectedNo] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  // const previousQuestions = JSON.parse(localStorage.getItem("selectedNos"));

  const handleDisplay = () => {
    if (selectedNo.includes(number)) {
      setSelectedQuestion(0);
    } else {
      setSelectedQuestion(number);
      setSelectedNo([...selectedNo, number]);
      localStorage.setItem("selectedNos", JSON.stringify(selectedNo));
    }
    // setSelectedNo([...selectedNo, number]);
    // localStorage.setItem("selectedNos", JSON.stringify(selectedNo));
  };

  console.log(selectedNo);

  const questionBankJson = JSON.stringify("selectedNos");

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
        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center border border-white rounded-lg p-10">
          {selectedQuestion !== 0 && (
            <QuestionViewer
              questionObject={questionBank[selectedQuestion]}
              questionNo={selectedQuestion}
            />
          )}
        </div>
      </div>
    </div>
  );
};
