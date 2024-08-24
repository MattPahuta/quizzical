import React from 'react';

import sampleData from '../data'
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

    Next ToDo:
    - Answer radio inputs need checked and onChange attributes
    - Ensure getting user-selected answers from quiz
    - Collect submitted answers
      - handleQuizSubmit function
    - State to hold user-submitted answers
      - collect at Question component, Answer, or Quiz?
    - Compare user-submitted answers with correct answers
  */



function Quiz() {
  const url =
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple';
  const [questions, setQuestions] = React.useState([]);
  const [reset, setReset] = React.useState(false);

  console.log(sampleData.results)

  // fetch quiz data from api
  function getQuestions() {
    // ToDo: Add try/catch to account for error in response
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }

  React.useEffect(() => {
    getQuestions();
  }, []);

  console.log(questions);

  const questionsToRender = formatQuestions(questions)
  console.log(questionsToRender)

  // Generate 5 Question components from formated questions array
  const questionElements = questionsToRender.map((questionObj, index) => (
    <Question 
      key={Math.random()} 
      questionTitle={questionObj.question} 
      questionAnswers={questionObj.answers}
      questionName={`question-${index + 1}`} 
    />
  ))


  return (
    <form>
      {/* map over formated questions to produce 5 questions */}
      {/* question elements */}
      {questionElements}
      <div className='form-footer'>
        <button className='btn submit-btn'>Submit Answers</button>
      </div>
    </form>
  );
}

export default Quiz;