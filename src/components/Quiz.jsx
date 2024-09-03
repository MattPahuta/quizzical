import React from 'react';

import Question from './Question';
import { formatQuestions } from '../../utils';
// import { decode } from 'html-entities';

function Quiz() {
  // State variables for quiz functionality
  const [questions, setQuestions] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState({});
  const [score, setScore] = React.useState(0);
  // ToDo: rename to quizIsComplete, setQuizIsComplete
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
        const formattedQuestions = formatQuestions(data.results)
        setQuestions(formattedQuestions);
      })
      .catch(error => console.error('Error fetching quiz data:', error));
  }

  console.log(questions);
  console.log(userAnswers);

  // Handle user selected answers, changing of answer
  function handleAnswerChange(questionId, answer) {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  }

  // ToDo: prevent submit if < 5 answers selected
  // Handle sumbit of quiz
  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(userAnswers).length < 5) {
      alert('Please select an answer for all 5 questions.')
      return;
    }
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

  // Loading message while data is retrieved
  // ToDo: add a loading spinner - react component, via npm?
  if (!questions.length) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className='quiz-form'>
      {questions.map((question, index) => (
        <Question 
          key={index}
          questionId={question.id}
          questionText={question.question}
          answers={question.answers}
          userAnswer={userAnswers[question.id]}
          quizFinished={quizFinished}
          handleAnswerChange={handleAnswerChange}
          correctAnswer={question.correct_answer}
        />
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

}

export default Quiz;