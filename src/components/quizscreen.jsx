import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { QuestionList } from "./questionList";
import "../css/quizScreen.css";
import { Link } from "react-router-dom";

export const Quizquestions = ({
  question,
  totalQuestions,
  currentQuestion,
  setAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const nextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  };

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(nextQuestion, 15 * 1000);
  }, [question]);

  return (
    <div>
      <div className="progress-bar" ref={progressBar}></div>
      <div>
        {currentQuestion} of {totalQuestions}
      </div>

      <div className="mt-10 w-full h-[90%] flex flex-col items-center justify-center p-4">
        <div className="text-2xl 2xl:text-6xl">{question.question}</div>
        <div>
          {question.options.map((option, index) => {
            return (
              <div className="text-xl 2xl:text-4xl" key={index}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Quizscreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  return (
    <div className="text-white">
      {isQuestionEnd ? (
        <div className="h-72 w-full flex flex-col gap-8 items-center justify-center">
          <p> "The End"</p>
          <Link to="/questions">
            <button className="w-40  h-9 2xl:w-80 2xl:h-12 flex items-center justify-center border rounded-lg border-white hover:bg-white hover:text-black">
              Go to IT School of The year
            </button>
          </Link>
        </div>
      ) : (
        <Quizquestions
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
};
