import React from "react";

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

function Question({questionText}) {
  return (
    <fieldset className="question-container">
      <legend className="question-title">{questionText}</legend>
      <div className="answers-container">
      </div>
    </fieldset>
  )
}

export default Question;