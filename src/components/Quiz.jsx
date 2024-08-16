import React from 'react';

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

  */

function Quiz({quitQuiz}) {
  
  const url = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple';
  const [questions, setQuestions] = React.useState([]);
  const [reset, setReset] = React.useState(false)

  // fetch quiz data from api
  function getQuestions() {
    fetch(url)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }

  React.useEffect(() => {
    getQuestions()
  }, [])

  console.log(questions)

  // format questions with answers
  // 

  const formattedQuestion = {
    question: 'question',
    answers: [
      { answer: 'answer text', isCorrect: true },
      { answer: 'answer text', isCorrect: false },
      { answer: 'answer text', isCorrect: false },
      { answer: 'answer text', isCorrect: false },
    ],
  };

  return (
    <section>
      <h2>Welcome to the Quiz!</h2>
      <ul>
        <li>Question</li>
        <li>Question</li>
        <li>Question</li>
      </ul>
      <button className="btn quit-btn" onClick={quitQuiz}>Exit Quiz</button>
    </section>
  )
}

export default Quiz;