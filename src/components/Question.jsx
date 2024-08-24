import React from "react";

import Answer from './Answer';



function Question({questionTitle, questionAnswers, questionName}) {

  const answers = questionAnswers.map((answerObj) => (
    <Answer
      key={Math.random()}
      answerText={answerObj.answer}
      answerName={questionName}
    />
  ));

  return (
    <fieldset className="question-container">
      <legend className="question-title">{questionTitle}</legend>
      <div className="answers-container">
        {answers}
      </div>
    </fieldset>
  )
}

export default Question;