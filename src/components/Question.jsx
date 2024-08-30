import React from "react";

// const questionId = React.useId();

/* 
  ToDo:
  - add nanoID to use for better ID gen for answer inputs, labels
  - or, use useId and export the answer component
  - Incorporate Answer component for each answer mapped
*/

function Question({questionId, questionText, answers, userAnswer, quizFinished, handleAnswerChange, correctAnswer}) {
  // Get styling classes for answers
  // ToDo: port to utils
  function getAnswerClass(answer) {
    if (!quizFinished) return 'choice-btn';
    // Note: can I use ternary here? is else clause needed?
    if (answer === correctAnswer) {
      return 'choice-btn correct-answer';
    } else if (userAnswer === answer) {
      return 'choice-btn incorrect-answer';
    } else {
      return 'choice-btn';
    }
  }

  return (
    <fieldset className="question-container">
      <legend className="question-title">
        {questionText}
      </legend>
      <div className="answers-container">
        {answers.map((answerObj, index) => (
          <div key={index} className="answer">
            <input
              type="radio"
              name={`question-${questionId}`}
              value={answerObj.answer}
              onChange={() =>
                handleAnswerChange(questionId, answerObj.answer)
              }
              checked={
                userAnswer === answerObj.answer
              }
              disabled={quizFinished}
              id={answerObj.answer}
              className="radio-input-choice visually-hidden"
            />
            <label
              htmlFor={answerObj.answer}
              className={getAnswerClass(answerObj.answer)}
            >
              {answerObj.answer}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default Question;