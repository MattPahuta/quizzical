import React from 'react';

import Question from './Question';
import { formatQuestions } from '../../utils';
import { shuffle } from '../../utils';
import { decode } from 'html-entities';

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
  function fetchQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        const formattedQuestions = data.results.map((questionObj, index) => ({
          id: index,
          question: decode(questionObj.question),
          correct_answer: questionObj.correct_answer,
          answers: shuffle([
            {answer: decode(questionObj.correct_answer), isCorrect: true},
            ...questionObj.incorrect_answers.map(answer => ({answer: decode(answer), isCorrect: false}))
          ])
        }))
        setQuestions(formattedQuestions);
      })
      .catch(error => console.error('Error fetching quiz data:', error));

  }

  console.log(questions);
  console.log(userAnswers);

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
    calculateScore()
    setQuizFinished(true);
  }

  // Calculate score
  function calculateScore() {
    const correctAnswers = questions.filter(
      question => userAnswers[question.id] === question.correct_answer
    ).length;
    setScore(correctAnswers)
    console.log(userAnswers)
  }


  // Restart quiz
  function restartQuiz() {
    fetchQuestions();
    setUserAnswers([]);
    setScore({});
    setQuizFinished(false);
  }

  // Get styling classes for answers
  // ToDo: port to utils
  function getAnswerClass(questionId, answer) {
    if (!quizFinished) return 'choice-btn';

    const correctAnswer = questions.find(q => q.id === questionId).correct_answer;
    const userAnswer = userAnswers[questionId];

    // Note: can I use ternary here? is else clause needed?
    if (answer === correctAnswer) { // user selected right answer?
      return 'choice-btn correct-answer';
    } else if (answer === userAnswer) { // user selected wrong answer?
      return 'choice-btn incorrect-answer';
    } else {
      return 'choice-btn';
    }
  }

  // Loading message while data is retrieved
  // ToDo: add a loading spinner - react component, via npm?
  if (!questions.length) return <div>Loading...</div>;

  /* 
    ToDo:
    - add nanoID to use for better ID gen for answer inputs, labels
    - Port Question component
  */

  return (
    <form onSubmit={handleSubmit} className='quiz-form'>
      {questions.map((question, index) => (
        <fieldset key={index} className="question-container">
          <legend className="question-title">
            {question.question}
          </legend>
          <div className="answers-container">
            {question.answers.map((answerObj, i) => (
              <div key={i} className="answer">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answerObj.answer}
                  onChange={() =>
                    handleAnswerChange(question.id, answerObj.answer)
                  }
                  checked={
                    userAnswers[question.id] === answerObj.answer
                  }
                  disabled={quizFinished}
                  id={answerObj.answer}
                  className="radio-input-choice visually-hidden"
                />
                <label
                  htmlFor={answerObj.answer}
                  className={getAnswerClass(question.id, answerObj.answer)}>
                  {answerObj.answer}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
      {!quizFinished ? (
        <button type="submit" className="btn btn-primary">
          Submit Answers
        </button>
      ) : (
        <div className="score-container">
          <p className='score-message'>
            Your scored {score} / {questions.length} correct answers
          </p>
          <button onClick={restartQuiz} className="btn btn-primary">
            Play Again
          </button>
        </div>
      )}
    </form>
  );


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