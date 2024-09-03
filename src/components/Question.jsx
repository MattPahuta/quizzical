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
        ))}
      </div>
    </fieldset>
  );
}

export default Question;