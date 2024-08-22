import React from "react";

import Answer from './Answer';
/*
  Question component needs:
  - question 
  - array of 4 answers
    - correct answer flagged?
*/

// *** Map 4 individual answers for each question
// function Answer({answer}) {

//   return (
//     <div className="answer">
//       <input 
//         type="radio" 
//         name={`question-${index}`} 
//         id={answer} 
//         value={answer}
//         checked={false}
//         className="radio-input-choice visually-hidden" />
//       <label 
//         htmlFor="" 
//         className="choice-btn">
//       </label>
//     </div>
//   )
// }

function Question({questionTitle, questionAnswers}) {

  const answers = questionAnswers.map((answerObj, index) => (
    <Answer
      key={Math.random()}
      answerText={answerObj.answer}
      answerName={`answer-${index + 1}`}
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