import React from 'react';


  /* 
    Initialize state to determine if 'start quiz' splash should be displayed,
      or the quiz should be displayed

    2 screens: start and questions

    Quiz screen 
      - collect answers (use form)
      - tally correct/incorrect answers after submit
      - display selected answers, incorrect answers   
  
    Hints: 
     - use html-entities library to decode the html entities coming back in the question
     - create an array with all answers, randomly insert correct_answer into the array w/incorrect_answers

     Header will always be present
     main div will always be present
  */

function Quiz() {

  return (
    <>
      <h2>Welcome to the Quiz!</h2>
    </>
  )
}

export default Quiz;