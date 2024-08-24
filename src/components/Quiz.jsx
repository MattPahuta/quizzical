import React from 'react';

import Question from './Question';
import { formatQuestions } from '../../utils';

function Quiz() {
  // State variables for quiz functionality
  const [questions, setQuestions] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState({});
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  React.useEffect(() => {
    fetchQuestions();
  }, []);

  // Fetch quiz data from API
  async function fetchQuestions() {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
    );
    const data = await response.json();
    const formattedQuestions = formatQuestions(data.results);
    setQuestions(formattedQuestions);
  }

  console.log(questions);

  // Handle user selected answers, changing of answer
  // ToDo: port to utils?
  function handleAnswerChange(questionId, answer) {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  }

  // Handle sumbit of quiz
  function handleSubmit(event) {
    event.preventDefault();
    setQuizFinished(true);
  }

  // Calculate score
  function calculateScore() {
    const correctAnswers = questions.filter(
      question => userAnswers[question.id] === question.correct_answer
    ).length;
    setScore(correctAnswers)
  }


  // Restart quiz
  function restartQuiz() {
    fetchQuestions();
    setUserAnswers([]);
    setScore({});
    setQuizFinished(false);
  }

  // Loading message while data is retrieved
  // ToDo: add a loading spinner - react component, via npm?
  if (!questions.length) return <div>Loading...</div>;

  // Calculate user score - ToDo: port to utils
  // function calculateScore() {
  //   const correctAnswers = answers.filter(
  //     (answer) => answer.isCorrect
  //   ).length;
  //   setScore(correctAnswers);
  // }

  // Generate 5 Question components from formated questions array
  // const questionElements = questions.map(
  //   (questionObj, index) => (
  //     <Question
  //       key={index}
  //       questionTitle={questionObj.question}
  //       questionAnswers={questionObj.answers}
  //       questionName={`question-${index + 1}`}
  //     />
  //   )
  // );

  /* 
    ToDo:
    - add nanoID to use for better ID gen for answer inputs, labels
    - Port Question component
  */

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <fieldset key={index} className='question-container'>
          <legend className='question-title'>{question.question}</legend>
          <div className='answers-container'>
            {question.answers.map((answerObj, i) => (
              <div key={i} className='answer'>
                <input 
                  type='radio'
                  name={`question-${question.id}`}
                  value={answerObj.answer}
                  onChange={() => handleAnswerChange(question.id, answerObj.answer)}
                  checked={userAnswers[question.id] === answerObj.answer}
                  disabled={quizFinished}
                  id={answerObj.answer}
                />
                <label htmlFor={answerObj.answer} className='choice-btn'>
                  {answerObj.answer}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
      {!quizFinished ? (
        <button type='submit' className='btn'>Submit Answers</button>
      ) : (
        <div className='score-container'>
          <p>Your score: {score} / {questions.length}</p>
          <button onClick={restartQuiz} className='btn'>Play Again</button>
        </div>
      )}
    </form>
  )


//   return (
//     <div>
//       {!quizFinished ? (
//         <form>
//           {questionElements}
//         </form>
//       ) : (
//         <div>
//           <h2>Quiz Complete</h2>
//           <p>Your score: {score}</p>
//           <button className="btn" onClick={restartQuiz}>
//             Restart Quiz
//           </button>
//         </div>
//       )}
//     </div>
//   );


}

export default Quiz;