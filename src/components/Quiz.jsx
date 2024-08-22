import React from 'react';

import Question from './Question';
import Answer from './Answer';

import { formatQuestions } from '../../utils';


  /* 

    Quiz screen 
      - collect answers (use form)
      - tally correct/incorrect answers after submit
      - display selected answers, incorrect answers   
  
    Hints: 
     - use html-entities library to decode the html entities coming back in the question
     - create an array with all answers, randomly insert correct_answer into the array w/incorrect_answers

     Header will always be present
     main div will always be present

     Helper functions:
     - format questions
      - combine correct and incorrect answers into one array
      - track correct question
    - randomize displayed answers
    Constants:
    - API base url
    State:
    - questions from API - default: []
    - answers from user? - default: []

  */



function Quiz({quitQuiz}) {
  const url =
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple';
  const [questions, setQuestions] = React.useState([]);
  const [reset, setReset] = React.useState(false);

  // fetch quiz data from api
  function getQuestions() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }

  React.useEffect(() => {
    getQuestions();
  }, []);

  console.log(questions);

  // console.log(formatQuestions(questions))

  const questionsToRender = formatQuestions(questions)
  console.log(questionsToRender)

  // function Question(quizObj) {
  //   const { question } = quizObj

  //   return (
  //     <fieldset className='question-container'>
  //       <legend className='question-title'>{question}</legend>
  //       <div className='answers-container'>
  //       </div>
  //     </fieldset>
  //   )

  // }



  const questionElements = questionsToRender.map((questionObj) => (
    <Question key={Math.random()} questionText={questionObj.question} />
  ))


  return (
    <form>
      {/* map over formated questions to produce 5 questions */}
      {/* question elements */}
      {questionElements}
      <div className='btn-container'>
        <button className='btn submit-btn'>Submit Answers</button>
      </div>
    </form>
  );
}

export default Quiz;