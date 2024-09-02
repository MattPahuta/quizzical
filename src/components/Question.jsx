import React from "react";

import Answer from "./Answer";

function Question({questionId, questionText, answers, userAnswer, quizFinished, handleAnswerChange, correctAnswer}) {

  return (
    <fieldset className="question-container">
      <legend className="question-title">
        {questionText}
      </legend>
      <div className="answers-container">
        {answers.map((answerObj, index) => (
          <Answer 
            key={index} 
            answerText={answerObj.answer}
            isCorrect={answerObj.answer === correctAnswer}
            isSelected={userAnswer === answerObj.answer}
            quizFinished={quizFinished}
            onChange={() => handleAnswerChange(questionId, answerObj.answer)}
          />
          // <div key={index} className="answer">
          //   <input
          //     type="radio"
          //     name={`question-${questionId}`}
          //     value={answerObj.answer}
          //     onChange={() =>
          //       handleAnswerChange(questionId, answerObj.answer)
          //     }
          //     checked={
          //       userAnswer === answerObj.answer
          //     }
          //     disabled={quizFinished}
          //     id={answerObj.answer}
          //     className="radio-input-choice visually-hidden"
          //   />
          //   <label
          //     htmlFor={answerObj.answer}
          //     className={getAnswerClass(answerObj.answer)}
          //   >
          //     {answerObj.answer}
          //   </label>
          // </div>
        ))}
      </div>
    </fieldset>
  );
}

export default Question;